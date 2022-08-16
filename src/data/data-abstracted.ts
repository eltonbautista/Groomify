import type { IBreeds } from "../components/PricingCard.vue";

const pcd: IBreeds[] = [
  {
    dogSize: "Small",
    breeds: {
      one: "Bichon, Boston Terrier",
      two: "Chihuahua, Pekingese",
      three: "Shih Tzu, Yorkshire Terrier",
    },
    price: "35",
  },
  {
    dogSize: "Medium",
    breeds: {
      one: "Australian Shepherd, Beagle",
      two: "Cocker Spaniel, Vizsla",
      three: "Poodle, German Pinscher",
    },
    price: "45",
  },
  {
    dogSize: "Large",
    breeds: {
      one: "Samoyed, Golden Retriever",
      two: "Dalmatian, Boxer",
      three: "German Shepherd, Husky",
    },
    price: "50",
  },
];

const userReviews = [
  { reviewer: "Lori Johnson", text: "5 Stars what an awesome company!" },
  {
    reviewer: "Kyle Willems",
    text: "I absolutely love these guys! They took such great care of Prince!",
  },
  {
    reviewer: "Robert Kugler",
    text: "Sometimes I don't even feel like taking a shower, but these guys could definitely get me through those times!",
  },
  {
    reviewer: "Elton Bautista",
    text: "Amazing professional and gentle approach, from matted to clean and neat!",
  },
  {
    reviewer: "Robert Downey Jr.",
    text: "Groomify taught me how to transform myself, never give up!!",
  },
];
const keys = ["Committed", "Accustomed", "Faithful", "Devoted", "Dedicated"];
const sentences = [
  " creating stories",
  " pleasing our clients",
  " our companions",
  " only delivering our best",
  " yours as if they were ours",
];
export { pcd, userReviews, keys, sentences };
