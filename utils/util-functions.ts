export const DateConverter = (dateString: string) => {
  const dateObject = new Date(dateString);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  // @ts-expect-error
  return dateObject.toLocaleDateString("en-US", options);
};

export const DateAndTimeConverter = (dateString: string) => {
  const dateObject = new Date(dateString);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };

  // @ts-expect-error
  return dateObject.toLocaleDateString("en-US", options);
};
