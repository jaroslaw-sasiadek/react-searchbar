type SearchCallback = (event: React.ChangeEvent<HTMLInputElement>) => void;

class SearchListener {
  listener: SearchCallback | null = null;

  subscribe = (handler: SearchCallback) => {
    if (this.listener) throw new Error("Use only one listener!");
    else this.listener = handler;
  };

  unsubscribe = () => (this.listener = null);

  notify = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!this.listener) throw new Error("No listener found!");
    else this.listener(event);
  };
}

export const searchListener = new SearchListener();
