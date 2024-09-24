import { useEffect, useState } from "react";
import { NextRouter, useRouter } from 'next/router';
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const updateUrl = (router: NextRouter, tags: string[]) => {
  const queryString = tags.map(tag => `tag=${tag}`).join('&');
  router.push(`?${queryString}`);
}

export const useTag = () => {
  const router = useRouter();
  const { query } = router;

  const [tags, setTags] = useState<string[]>(query.tag ? [query.tag].flat() : []);

  const removeTag = (tag: string) => {
    setTags(prevTags => prevTags.filter(t => t !== tag));
  };

  const addTag = (tag: string) => {
    if (!tags.includes(tag)) {
      setTags(prevTags => [...prevTags, tag]);
    } else {
      removeTag(tag);
    }
  };

  useEffect(() => {
    updateUrl(router, tags);
  }, [tags, router]);

  return {tags, addTag};
}