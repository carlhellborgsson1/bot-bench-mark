
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Terminal, Layers, Zap } from "lucide-react";

const API = () => {
  return (
    <div className="max-w-7xl mx-auto animate-fade-in">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-500/10 to-blue-500/10">
            <Code className="h-6 w-6 text-indigo-600" />
          </div>
          <h1 className="text-3xl font-bold">API Capabilities</h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Comprehensive comparison of API features, developer tools, SDKs, and integration capabilities 
          across different AI chatbot platforms.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Terminal className="h-5 w-5 text-green-600" />
              API Features Comparison
            </CardTitle>
            <CardDescription>Core API capabilities and limitations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold">OpenAI API (GPT-4)</h4>
                  <Badge className="bg-blue-100 text-blue-700">Most Mature</Badge>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="font-medium">Rate Limits</p>
                    <p className="text-muted-foreground">10,000 RPM</p>
                  </div>
                  <div>
                    <p className="font-medium">Context Length</p>
                    <p className="text-muted-foreground">128K tokens</p>
                  </div>
                  <div>
                    <p className="font-medium">Response Time</p>
                    <p className="text-muted-foreground">2-5 seconds</p>
                  </div>
                  <div>
                    <p className="font-medium">Streaming</p>
                    <p className="text-muted-foreground">Yes</p>
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">Function Calling</Badge>
                  <Badge variant="outline" className="text-xs">Vision API</Badge>
                  <Badge variant="outline" className="text-xs">Fine-tuning</Badge>
                </div>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold">Anthropic API (Claude)</h4>
                  <Badge className="bg-purple-100 text-purple-700">High Quality</Badge>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="font-medium">Rate Limits</p>
                    <p className="text-muted-foreground">5,000 RPM</p>
                  </div>
                  <div>
                    <p className="font-medium">Context Length</p>
                    <p className="text-muted-foreground">200K tokens</p>
                  </div>
                  <div>
                    <p className="font-medium">Response Time</p>
                    <p className="text-muted-foreground">3-6 seconds</p>
                  </div>
                  <div>
                    <p className="font-medium">Streaming</p>
                    <p className="text-muted-foreground">Yes</p>
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">Constitutional AI</Badge>
                  <Badge variant="outline" className="text-xs">Long Context</Badge>
                  <Badge variant="outline" className="text-xs">Vision</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Layers className="h-5 w-5 text-purple-600" />
              SDK & Integration Support
            </CardTitle>
            <CardDescription>Development tools and framework support</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-3">Official SDKs</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="font-medium text-sm">Python</p>
                    <p className="text-xs text-muted-foreground">All platforms</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <p className="font-medium text-sm">Node.js</p>
                    <p className="text-xs text-muted-foreground">All platforms</p>
                  </div>
                  <div className="p-3 bg-orange-50 rounded-lg">
                    <p className="font-medium text-sm">JavaScript</p>
                    <p className="text-xs text-muted-foreground">OpenAI, Anthropic</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <p className="font-medium text-sm">Go</p>
                    <p className="text-xs text-muted-foreground">Community</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Framework Integrations</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span className="text-sm">LangChain</span>
                    <Badge variant="outline" className="text-xs">All</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span className="text-sm">LlamaIndex</span>
                    <Badge variant="outline" className="text-xs">Most</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span className="text-sm">Vercel AI SDK</span>
                    <Badge variant="outline" className="text-xs">OpenAI</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span className="text-sm">Haystack</span>
                    <Badge variant="outline" className="text-xs">OpenAI</Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-yellow-600" />
              Performance Metrics
            </CardTitle>
            <CardDescription>API speed and reliability</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">OpenAI GPT-4</span>
                <div className="text-right">
                  <p className="text-sm font-medium">2.3s</p>
                  <p className="text-xs text-muted-foreground">Avg latency</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Anthropic Claude</span>
                <div className="text-right">
                  <p className="text-sm font-medium">3.1s</p>
                  <p className="text-xs text-muted-foreground">Avg latency</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Google Gemini</span>
                <div className="text-right">
                  <p className="text-sm font-medium">1.8s</p>
                  <p className="text-xs text-muted-foreground">Avg latency</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Authentication</CardTitle>
            <CardDescription>Security and access control</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="p-3 border rounded-lg">
                <p className="font-medium text-sm">API Keys</p>
                <p className="text-xs text-muted-foreground">Standard across all platforms</p>
              </div>
              <div className="p-3 border rounded-lg">
                <p className="font-medium text-sm">OAuth 2.0</p>
                <p className="text-xs text-muted-foreground">OpenAI, Google</p>
              </div>
              <div className="p-3 border rounded-lg">
                <p className="font-medium text-sm">Organization Keys</p>
                <p className="text-xs text-muted-foreground">Enterprise features</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Error Handling</CardTitle>
            <CardDescription>API reliability features</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Rate Limiting</span>
                <Badge variant="outline" className="text-xs">All</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Retry Logic</span>
                <Badge variant="outline" className="text-xs">SDK</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Status Codes</span>
                <Badge variant="outline" className="text-xs">Standard</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Webhooks</span>
                <Badge variant="outline" className="text-xs">Limited</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Code Examples</CardTitle>
          <CardDescription>Quick start examples for popular platforms</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold">OpenAI API (Python)</h4>
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
              <h4 className="font-semibold">Anthropic API (Python)</h4>
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
    </div>
  );
};

export default API;
