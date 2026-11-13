import { extractPostData, savePost } from './src/posts/posts';
import { showError } from './src/util/dom';

const formElement = document.querySelector('form')!;

export async function submitFormHandler(event: SubmitEvent) {
  event.preventDefault();

  const formData = new FormData(formElement);
  try {
    const postData = extractPostData(formData);
    await savePost(postData);
  } catch (error) {
    showError((error as Error).message);
  }
}

formElement.addEventListener('submit', submitFormHandler);
