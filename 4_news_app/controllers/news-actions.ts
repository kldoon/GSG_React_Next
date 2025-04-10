'use server';

import { ALLOWED_CATEGORIES } from "@/constants/data";
import { insertArticle } from "@/services/news.service";
import { redirect } from "next/navigation";
import slugify from "slugify";
import xss from "xss";
import fs from 'node:fs';

const addArticle = async (prevState: { errors: string[] }, formData: FormData) => {
  const title = xss(formData.get('title')?.toString() || '');

  const newArticle: News.Item_ = {
    title,
    image: '',
    summary: xss(formData.get('summary')?.toString() || ''),
    content: xss(formData.get('content')?.toString() || ''),
    date: new Date(formData.get('date')?.toString() || '').getTime(),
    author: formData.get('author')?.toString() || '',
    author_email: formData.get('author_email')?.toString() || '',
    category: formData.get('category')?.toString() || 'global',
    slug: slugify(title, { lower: true })
  };

  const imgFile = formData.get('image') as File;
  const fileExtension = imgFile.name.split('.').pop();
  const fileName = `${newArticle.slug}.${fileExtension}`;
  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await imgFile.arrayBuffer()
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error('Error uploading Image!');
    }
  });

  newArticle.image = `/images/${fileName}`;

  const errors: string[] = [];

  if (!newArticle.title.length) {
    errors.push("The title should not be empty");
  }

  if (newArticle.title.length > 300) {
    errors.push("The title should be less than 300 chars length");
  }

  if (!ALLOWED_CATEGORIES.includes(newArticle.category)) {
    errors.push("The category you've provided is not allowed!");
  }

  if (newArticle.date > Date.now()) {
    errors.push("The date should not be in the future!");
  }

  if (errors.length) {
    return {
      errors
    }
  }

  await new Promise((resolve) => setTimeout(resolve, 2000));
  insertArticle(newArticle);
  redirect(`/news/${newArticle.slug}`);
}

export {
  addArticle
};