
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  chatbot: string;
  date: string;
}

const mockReviews: Review[] = [
  {
    id: "1",
    userName: "Sarah M.",
    rating: 5,
    comment: "ChatGPT Plus has been incredible for my research work. The accuracy and depth of responses are outstanding.",
    chatbot: "ChatGPT Plus",
    date: "2024-01-15"
  },
  {
    id: "2",
    userName: "Mike D.",
    rating: 4,
    comment: "Claude 3 is excellent for creative writing. The responses feel more natural and creative than other AIs.",
    chatbot: "Claude 3",
    date: "2024-01-12"
  },
  {
    id: "3",
    userName: "Emma K.",
    rating: 5,
    comment: "Gemini Pro's integration with Google services makes it perfect for my workflow. Completely free too!",
    chatbot: "Gemini Pro",
    date: "2024-01-10"
  }
];

export const UserReviews = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Real experiences from people who've found their perfect AI assistant
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockReviews.map((review) => (
            <Card key={review.id} className="bg-white shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg text-gray-900">{review.userName}</CardTitle>
                  <div className="flex items-center gap-1">
                    {renderStars(review.rating)}
                  </div>
                </div>
                <CardDescription className="text-blue-600 font-medium">
                  {review.chatbot}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-3">{review.comment}</p>
                <p className="text-sm text-gray-500">{review.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
