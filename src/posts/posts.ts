import { sendDataRequest } from '../util/http';
import { validateNotEmpty } from '../util/validation';

export interface PostData {
  title: string;
  content: string;
  created?: Date;
}

export function savePost(postData: PostData) {
  postData.created = new Date();
  return sendDataRequest(postData);
}

export function extractPostData(form: Pick<FormData, 'get'>): PostData {
  const title = form.get('title') as string | null;
  const content = form.get('content') as string | null;

  validateNotEmpty(title, 'A title must be provided.');
  validateNotEmpty(content, 'Content must not be empty!');

  return { title, content };
}
