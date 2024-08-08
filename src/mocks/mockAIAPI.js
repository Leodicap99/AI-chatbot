/*
    This file is to mimic a fetch call with a 0.5sec delay
*/
export const mockAPIResponse = async (inputValue) => {
  const responses = [
    "Sentisum specializes in AI-powered customer experience analytics",
    "Sentisum integrates with popular help desk and customer support tools like Zendesk, Freshdesk, Intercom, Dixa, and Gorgias",
    "The platform offers automated tagging of customer conversations, instant insights into customer issues, sentiment analysis, and support ticket analytics",
    "By automating data analysis, Sentisum helps businesses reduce manual effort, improve response times, prioritize urgent issues, and make data-driven decisions to enhance customer experience",
    "Sentisum caters to both startups and large enterprises, offering solutions that scale with the needs of different business sizes",
    "The company aims to transform customer support teams into strategic assets for business growth by leveraging customer data to uncover insights that drive product improvement and customer retention",
  ];
  let index = Math.floor(Math.random() * responses.length);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ text: responses[index], sender: "ai" });
    }, 500);
  });
};
