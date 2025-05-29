
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { User, Shield, Heart, BookOpen, Coffee, ExternalLink } from "lucide-react";
import { getAffiliateLink } from "@/utils/recommendations";

const PrivateUse = () => {
  return (
    <div className="max-w-7xl mx-auto animate-fade-in">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-gradient-to-br from-pink-500/10 to-rose-500/10">
            <User className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white">AI Chatbots for Private Use</h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Discover the best AI chatbots for personal use, including creative writing, learning, 
          daily assistance, and entertainment. Find the perfect AI companion for your individual needs.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        <Card className="lg:col-span-2 hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-black">
              <Heart className="h-5 w-5 text-red-500" />
              Best for Personal Use
            </CardTitle>
            <CardDescription className="text-black">Top recommendations for individual users</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="p-4 border rounded-lg bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-lg text-black">ChatGPT (GPT-4)</h4>
                  <Badge className="bg-blue-500 text-white">Best Overall</Badge>
                </div>
                <p className="text-black mb-3">
                  Most versatile AI assistant for creative writing, problem-solving, and daily tasks.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <p className="font-medium text-sm text-green-700">Best For:</p>
                    <ul className="text-sm text-green-600 space-y-1">
                      <li>• Creative writing and brainstorming</li>
                      <li>• Learning new topics</li>
                      <li>• Code help and tutorials</li>
                      <li>• General conversation</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-blue-700">Features:</p>
                    <ul className="text-sm text-blue-600 space-y-1">
                      <li>• Image analysis and generation</li>
                      <li>• Web browsing capability</li>
                      <li>• Plugin ecosystem</li>
                      <li>• Mobile app available</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-4 border rounded-lg bg-gradient-to-r from-purple-50 to-pink-50">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-lg text-black">Claude 3</h4>
                  <Badge className="bg-purple-500 text-white">Best for Writing</Badge>
                </div>
                <p className="text-black mb-3">
                  Exceptional for long-form content, analysis, and thoughtful conversations.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <p className="font-medium text-sm text-green-700">Best For:</p>
                    <ul className="text-sm text-green-600 space-y-1">
                      <li>• Long-form writing projects</li>
                      <li>• Document analysis</li>
                      <li>• Philosophical discussions</li>
                      <li>• Research assistance</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-purple-700">Features:</p>
                    <ul className="text-sm text-purple-600 space-y-1">
                      <li>• 200K token context window</li>
                      <li>• Excellent reasoning abilities</li>
                      <li>• Constitutional AI safety</li>
                      <li>• Great for complex tasks</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-4 border rounded-lg bg-gradient-to-r from-green-50 to-teal-50">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-lg text-black">Gemini Pro</h4>
                  <Badge className="bg-green-500 text-white">Free & Powerful</Badge>
                </div>
                <p className="text-black mb-3">
                  Excellent free option with Google integration and multimodal capabilities.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <p className="font-medium text-sm text-green-700">Best For:</p>
                    <ul className="text-sm text-green-600 space-y-1">
                      <li>• Google Workspace integration</li>
                      <li>• Real-time information</li>
                      <li>• Multiple language support</li>
                      <li>• Budget-conscious users</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-teal-700">Features:</p>
                    <ul className="text-sm text-teal-600 space-y-1">
                      <li>• Completely free access</li>
                      <li>• Image understanding</li>
                      <li>• Gmail and Docs integration</li>
                      <li>• Fast response times</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-black">
              <Shield className="h-5 w-5 text-green-600" />
              Privacy for Personal Use
            </CardTitle>
            <CardDescription className="text-black">Protecting your personal data</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                <p className="font-semibold text-green-900 text-sm">Best Privacy</p>
                <p className="text-green-700 text-sm">Claude 3 - No data retention</p>
                <p className="text-xs text-green-600 mt-1">Conversations not stored long-term</p>
              </div>
              
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="font-semibold text-blue-900 text-sm">Good Privacy</p>
                <p className="text-blue-700 text-sm">ChatGPT - Opt-out available</p>
                <p className="text-xs text-blue-600 mt-1">Can disable chat history</p>
              </div>

              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="font-semibold text-yellow-900 text-sm">Standard Privacy</p>
                <p className="text-yellow-700 text-sm">Gemini - Google integration</p>
                <p className="text-xs text-yellow-600 mt-1">Tied to Google account</p>
              </div>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold text-sm mb-2 text-black">Privacy Tips:</h4>
              <ul className="text-xs text-black space-y-1">
                <li>• Avoid sharing personal identifiers</li>
                <li>• Use incognito/private browsing</li>
                <li>• Check data retention settings</li>
                <li>• Review privacy policies regularly</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader className="text-center">
            <BookOpen className="h-8 w-8 text-blue-500 mx-auto mb-2" />
            <CardTitle className="text-lg text-black">Learning & Education</CardTitle>
            <CardDescription className="text-sm text-black">Study assistance and knowledge</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-center mb-4">
              <Badge className="bg-blue-100 text-blue-700">Recommended: Claude 3</Badge>
            </div>
            <ul className="text-sm space-y-2 text-black">
              <li>• Explain complex concepts</li>
              <li>• Language learning practice</li>
              <li>• Homework help</li>
              <li>• Research assistance</li>
              <li>• Quiz generation</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader className="text-center">
            <Coffee className="h-8 w-8 text-amber-500 mx-auto mb-2" />
            <CardTitle className="text-lg text-black">Daily Assistant</CardTitle>
            <CardDescription className="text-sm text-black">Everyday task automation</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-center mb-4">
              <Badge className="bg-amber-100 text-amber-700">Recommended: ChatGPT</Badge>
            </div>
            <ul className="text-sm space-y-2 text-black">
              <li>• Schedule planning</li>
              <li>• Email drafting</li>
              <li>• Recipe suggestions</li>
              <li>• Travel planning</li>
              <li>• Quick calculations</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader className="text-center">
            <Heart className="h-8 w-8 text-pink-500 mx-auto mb-2" />
            <CardTitle className="text-lg text-black">Creative Projects</CardTitle>
            <CardDescription className="text-sm text-black">Art, writing, and creativity</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-center mb-4">
              <Badge className="bg-pink-100 text-pink-700">Recommended: GPT-4</Badge>
            </div>
            <ul className="text-sm space-y-2 text-black">
              <li>• Story and poem writing</li>
              <li>• Image generation ideas</li>
              <li>• Brainstorming sessions</li>
              <li>• Character development</li>
              <li>• Art project planning</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader className="text-center">
            <User className="h-8 w-8 text-purple-500 mx-auto mb-2" />
            <CardTitle className="text-lg text-black">Personal Growth</CardTitle>
            <CardDescription className="text-sm text-black">Self-improvement and wellness</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-center mb-4">
              <Badge className="bg-purple-100 text-purple-700">Recommended: Claude 3</Badge>
            </div>
            <ul className="text-sm space-y-2 text-black">
              <li>• Goal setting guidance</li>
              <li>• Habit tracking ideas</li>
              <li>• Mindfulness exercises</li>
              <li>• Career advice</li>
              <li>• Reflection prompts</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-black">Cost Comparison for Personal Use</CardTitle>
          <CardDescription className="text-black">Monthly costs and free tier options</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border-2 border-green-200">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-green-700">Free Option</h3>
                <p className="text-3xl font-bold text-green-600">$0</p>
                <p className="text-green-600">/month</p>
              </div>
              <ul className="space-y-2 text-sm text-green-700">
                <li>• Gemini Pro (unlimited)</li>
                <li>• ChatGPT-3.5 (limited)</li>
                <li>• Claude (basic tier)</li>
                <li>• Perfect for casual use</li>
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border-2 border-blue-200">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-blue-700">Standard</h3>
                <p className="text-3xl font-bold text-blue-600">$20</p>
                <p className="text-blue-600">/month</p>
              </div>
              <ul className="space-y-2 text-sm text-blue-700">
                <li>• ChatGPT Plus (GPT-4 access)</li>
                <li>• Claude Pro (5x usage)</li>
                <li>• All premium features</li>
                <li>• Best for regular use</li>
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border-2 border-purple-200">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-purple-700">Power User</h3>
                <p className="text-3xl font-bold text-purple-600">$40+</p>
                <p className="text-purple-600">/month</p>
              </div>
              <ul className="space-y-2 text-sm text-purple-700">
                <li>• Multiple subscriptions</li>
                <li>• API access for automation</li>
                <li>• Advanced integrations</li>
                <li>• Professional workflows</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-black">
            <Heart className="h-5 w-5 text-pink-600" />
            Get Started with Your Perfect AI Chatbot
          </CardTitle>
          <CardDescription className="text-black">Click below to start using the recommended AI chatbots for personal use</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 border rounded-lg bg-gradient-to-r from-blue-50 to-purple-50">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-lg text-black">ChatGPT Plus (GPT-4)</h4>
                <Badge className="bg-blue-500 text-white">Most Versatile</Badge>
              </div>
              <p className="text-black mb-4">
                Perfect for creative writing, learning, and daily assistance with advanced capabilities.
              </p>
              <ul className="text-sm text-black space-y-1 mb-4">
                <li>• $20/month for GPT-4 access</li>
                <li>• Image analysis & generation</li>
                <li>• Web browsing capability</li>
                <li>• Plugin ecosystem</li>
              </ul>
              <Button 
                onClick={() => window.open(getAffiliateLink("ChatGPT Plus (GPT-4)"), '_blank')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Get ChatGPT Plus
              </Button>
            </div>

            <div className="p-4 border rounded-lg bg-gradient-to-r from-purple-50 to-pink-50">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-lg text-black">Claude 3</h4>
                <Badge className="bg-purple-500 text-white">Best for Writing</Badge>
              </div>
              <p className="text-black mb-4">
                Exceptional for long-form content, analysis, and thoughtful conversations with privacy focus.
              </p>
              <ul className="text-sm text-black space-y-1 mb-4">
                <li>• $20/month for Pro access</li>
                <li>• 200K token context window</li>
                <li>• No data retention policy</li>
                <li>• Constitutional AI safety</li>
              </ul>
              <Button 
                onClick={() => window.open(getAffiliateLink("Claude 3"), '_blank')}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Get Claude 3
              </Button>
            </div>

            <div className="p-4 border rounded-lg bg-gradient-to-r from-green-50 to-teal-50">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-lg text-black">Gemini Pro</h4>
                <Badge className="bg-green-500 text-white">Free & Powerful</Badge>
              </div>
              <p className="text-black mb-4">
                Completely free option with Google integration and multimodal capabilities.
              </p>
              <ul className="text-sm text-black space-y-1 mb-4">
                <li>• Completely free to use</li>
                <li>• Google Workspace integration</li>
                <li>• Real-time information access</li>
                <li>• Multiple language support</li>
              </ul>
              <Button 
                onClick={() => window.open(getAffiliateLink("Gemini Pro"), '_blank')}
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Get Gemini Pro
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PrivateUse;
