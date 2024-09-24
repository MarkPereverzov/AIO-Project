'use client';
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from 'next/navigation';
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const updateUrl = (router: AppRouterInstance, tags: string[]) => {
  const queryString = tags.map(tag => `tag=${tag}`).join('&');
  router.push(`?${queryString}`);
}

export const useTag = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const tagsFromQuery = searchParams?.getAll('tag'); 

  const [activeTags, setTags] = useState<string[]>(tagsFromQuery ? [tagsFromQuery].flat() : []);

  const removeTag = (tag: string) => {
    setTags(prevTags => prevTags.filter(t => t !== tag));
  };

  const addTag = (tag: string) => {
    if (!activeTags.includes(tag)) {
      setTags(prevTags => [...prevTags, tag]);
    } else {
      removeTag(tag);
    }
  };

  useEffect(() => {
    updateUrl(router, activeTags);
  }, [activeTags, router]);

  return {activeTags, addTag};
}