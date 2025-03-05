'use server';

import { insertArticle } from "@/services/news.service";
import { redirect } from "next/navigation";
import slugify from "slugify";
import xss from "xss";

const addArticle = async (formData: FormData) => {
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

  insertArticle(newArticle);
  redirect(`/news/${newArticle.slug}`);
}

export {
  addArticle
};