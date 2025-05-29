
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Terminal, Layers, Zap, Info } from "lucide-react";

const API = () => {
  return (
    <div className="max-w-7xl mx-auto animate-fade-in">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-500/10 to-blue-500/10">
            <Code className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white">API Capabilities</h1>
        </div>
        <p className="text-lg text-white max-w-3xl">
          Comprehensive comparison of API features, developer tools, SDKs, and integration capabilities 
          across different AI chatbot platforms.
        </p>
      </div>

      {/* API Metrics Explanation */}
      <Card className="mb-8 bg-indigo-50 border-indigo-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-black">
            <Info className="h-5 w-5" />
            Understanding API Metrics
          </CardTitle>
          <CardDescription className="text-black">
            Here's what each API metric means for developers:
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-3 bg-white rounded-lg border border-indigo-200">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="h-4 w-4 text-indigo-600" />
              <h4 className="font-semibold text-black">Rate Limits (RPM)</h4>
            </div>
            <p className="text-sm text-black">Maximum API requests per minute your application can make</p>
          </div>
          <div className="p-3 bg-white rounded-lg border border-indigo-200">
            <div className="flex items-center gap-2 mb-2">
              <Terminal className="h-4 w-4 text-indigo-600" />
              <h4 className="font-semibold text-black">Context Length</h4>
            </div>
            <p className="text-sm text-black">Maximum tokens (words) the AI can process in a single conversation</p>
          </div>
          <div className="p-3 bg-white rounded-lg border border-indigo-200">
            <div className="flex items-center gap-2 mb-2">
              <Code className="h-4 w-4 text-indigo-600" />
              <h4 className="font-semibold text-black">Response Time</h4>
            </div>
            <p className="text-sm text-black">Average time from API request to response completion</p>
          </div>
          <div className="p-3 bg-white rounded-lg border border-indigo-200">
            <div className="flex items-center gap-2 mb-2">
              <Layers className="h-4 w-4 text-indigo-600" />
              <h4 className="font-semibold text-black">Streaming</h4>
            </div>
            <p className="text-sm text-black">Real-time response delivery as the AI generates text (like ChatGPT interface)</p>
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-black">
              <Terminal className="h-5 w-5 text-green-600" />
              API Features Comparison
            </CardTitle>
            <CardDescription className="text-black">Core API capabilities and technical limitations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-black">OpenAI API (GPT-4)</h4>
                  <Badge className="bg-blue-100 text-blue-700">Most Mature</Badge>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="font-medium text-black">Rate Limits</p>
                    <p className="text-black">10,000 requests/min</p>
                  </div>
                  <div>
                    <p className="font-medium text-black">Context Length</p>
                    <p className="text-black">128K tokens (~96,000 words)</p>
                  </div>
                  <div>
                    <p className="font-medium text-black">Response Time</p>
                    <p className="text-black">2-5 seconds average</p>
                  </div>
                  <div>
                    <p className="font-medium text-black">Streaming</p>
                    <p className="text-black">Yes (real-time)</p>
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
                  <h4 className="font-semibold text-black">Anthropic API (Claude)</h4>
                  <Badge className="bg-purple-100 text-purple-700">High Quality</Badge>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="font-medium text-black">Rate Limits</p>
                    <p className="text-black">5,000 requests/min</p>
                  </div>
                  <div>
                    <p className="font-medium text-black">Context Length</p>
                    <p className="text-black">200K tokens (~150,000 words)</p>
                  </div>
                  <div>
                    <p className="font-medium text-black">Response Time</p>
                    <p className="text-black">3-6 seconds average</p>
                  </div>
                  <div>
                    <p className="font-medium text-black">Streaming</p>
                    <p className="text-black">Yes (real-time)</p>
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
            <CardTitle className="flex items-center gap-2 text-black">
              <Layers className="h-5 w-5 text-purple-600" />
              SDK & Integration Support
            </CardTitle>
            <CardDescription className="text-black">Development tools and framework support</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-3 text-black">Official SDKs</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="font-medium text-sm text-black">Python</p>
                    <p className="text-xs text-black">All platforms</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <p className="font-medium text-sm text-black">Node.js</p>
                    <p className="text-xs text-black">All platforms</p>
                  </div>
                  <div className="p-3 bg-orange-50 rounded-lg">
                    <p className="font-medium text-sm text-black">JavaScript</p>
                    <p className="text-xs text-black">OpenAI, Anthropic</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <p className="font-medium text-sm text-black">Go</p>
                    <p className="text-xs text-black">Community</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-black">Framework Integrations</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span className="text-sm text-black">LangChain</span>
                    <Badge variant="outline" className="text-xs">All</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span className="text-sm text-black">LlamaIndex</span>
                    <Badge variant="outline" className="text-xs">Most</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span className="text-sm text-black">Vercel AI SDK</span>
                    <Badge variant="outline" className="text-xs">OpenAI</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span className="text-sm text-black">Haystack</span>
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
            <CardTitle className="flex items-center gap-2 text-black">
              <Zap className="h-5 w-5 text-yellow-600" />
              Performance Metrics
            </CardTitle>
            <CardDescription className="text-black">API speed and reliability</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-black">OpenAI GPT-4</span>
                <div className="text-right">
                  <p className="text-sm font-medium text-black">2.3s</p>
                  <p className="text-xs text-black">Avg latency</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-black">Anthropic Claude</span>
                <div className="text-right">
                  <p className="text-sm font-medium text-black">3.1s</p>
                  <p className="text-xs text-black">Avg latency</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-black">Google Gemini</span>
                <div className="text-right">
                  <p className="text-sm font-medium text-black">1.8s</p>
                  <p className="text-xs text-black">Avg latency</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-black">Authentication</CardTitle>
            <CardDescription className="text-black">Security and access control</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="p-3 border rounded-lg">
                <p className="font-medium text-sm text-black">API Keys</p>
                <p className="text-xs text-black">Standard across all platforms</p>
              </div>
              <div className="p-3 border rounded-lg">
                <p className="font-medium text-sm text-black">OAuth 2.0</p>
                <p className="text-xs text-black">OpenAI, Google</p>
              </div>
              <div className="p-3 border rounded-lg">
                <p className="font-medium text-sm text-black">Organization Keys</p>
                <p className="text-xs text-black">Enterprise features</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-black">Error Handling</CardTitle>
            <CardDescription className="text-black">API reliability features</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-black">Rate Limiting</span>
                <Badge variant="outline" className="text-xs">All</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-black">Retry Logic</span>
                <Badge variant="outline" className="text-xs">SDK</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-black">Status Codes</span>
                <Badge variant="outline" className="text-xs">Standard</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-black">Webhooks</span>
                <Badge variant="outline" className="text-xs">Limited</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

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
    </div>
  );
};

export default API;
