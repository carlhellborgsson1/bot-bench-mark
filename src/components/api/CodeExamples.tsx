
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const CodeExamples = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-black">Code Examples</CardTitle>
        <CardDescription className="text-black">Quick start examples for popular platforms</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-semibold text-black">OpenAI API (Python)</h4>
            <div className="p-4 bg-gray-900 text-green-400 rounded-lg text-sm font-mono">
              <pre>{`import openai

client = openai.OpenAI(
    api_key="your-api-key"
)

response = client.chat.completions.create(
    model="gpt-4",
    messages=[
        {"role": "user", "content": "Hello!"}
    ]
)

print(response.choices[0].message.content)`}</pre>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-black">Anthropic API (Python)</h4>
            <div className="p-4 bg-gray-900 text-green-400 rounded-lg text-sm font-mono">
              <pre>{`import anthropic

client = anthropic.Anthropic(
    api_key="your-api-key"
)

message = client.messages.create(
    model="claude-3-opus-20240229",
    max_tokens=1000,
    messages=[
        {"role": "user", "content": "Hello!"}
    ]
)

print(message.content[0].text)`}</pre>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
