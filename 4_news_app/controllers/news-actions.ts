'use server';

import { ALLOWED_CATEGORIES } from "@/constants/data";
import { insertArticle } from "@/services/news.service";
import { redirect } from "next/navigation";
import slugify from "slugify";
import xss from "xss";

const addArticle = async (prevState: { errors: string[] }, formData: FormData) => {
  const title = xss(formData.get('title')?.toString() || '');

  const newArticle: News.Item_ = {
    title,
    image: formData.get('image')?.toString() || '',
    summary: xss(formData.get('summary')?.toString() || ''),
    content: xss(formData.get('content')?.toString() || ''),
    date: new Date(formData.get('date')?.toString() || '').getTime(),
    author: formData.get('author')?.toString() || '',
    author_email: formData.get('author_email')?.toString() || '',
    category: formData.get('category')?.toString() || 'global',
    slug: slugify(title, { lower: true })
  };

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