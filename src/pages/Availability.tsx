
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, MapPin, Clock, Wifi } from "lucide-react";

const Availability = () => {
  return (
    <div className="max-w-7xl mx-auto animate-fade-in">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
            <Globe className="h-6 w-6 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold">Availability & Access</h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Explore global availability, regional restrictions, language support, and access methods 
          for different AI chatbot platforms worldwide.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-red-500" />
              Regional Availability
            </CardTitle>
            <CardDescription>Geographic access and restrictions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold">GPT-4 / ChatGPT</h4>
                  <Badge className="bg-green-100 text-green-700">Global</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Available in 160+ countries</p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">US</Badge>
                  <Badge variant="outline" className="text-xs">EU</Badge>
                  <Badge variant="outline" className="text-xs">Asia</Badge>
                  <Badge variant="outline" className="text-xs">Australia</Badge>
                </div>
              </div>
              
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold">Claude 3</h4>
                  <Badge className="bg-yellow-100 text-yellow-700">Limited</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Available in select regions</p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">US</Badge>
                  <Badge variant="outline" className="text-xs">UK</Badge>
                  <Badge variant="outline" className="text-xs">Canada</Badge>
                </div>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold">Gemini Pro</h4>
                  <Badge className="bg-green-100 text-green-700">Expanding</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Rapidly expanding globally</p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">US</Badge>
                  <Badge variant="outline" className="text-xs">EU</Badge>
                  <Badge variant="outline" className="text-xs">Japan</Badge>
                  <Badge variant="outline" className="text-xs">India</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-blue-500" />
              Language Support
            </CardTitle>
            <CardDescription>Multilingual capabilities and coverage</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <p className="text-2xl font-bold text-blue-600">95+</p>
                <p className="text-sm text-blue-700">GPT-4 Languages</p>
              </div>
              <div className="text-center p-3 bg-purple-50 rounded-lg">
                <p className="text-2xl font-bold text-purple-600">85+</p>
                <p className="text-sm text-purple-700">Claude Languages</p>
              </div>
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <p className="text-2xl font-bold text-green-600">100+</p>
                <p className="text-sm text-green-700">Gemini Languages</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-gray-600">90+</p>
                <p className="text-sm text-gray-700">GPT-3.5 Languages</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold">Top Supported Languages:</h4>
              <div className="flex flex-wrap gap-1">
                <Badge variant="outline">English</Badge>
                <Badge variant="outline">Spanish</Badge>
                <Badge variant="outline">French</Badge>
                <Badge variant="outline">German</Badge>
                <Badge variant="outline">Chinese</Badge>
                <Badge variant="outline">Japanese</Badge>
                <Badge variant="outline">Korean</Badge>
                <Badge variant="outline">Arabic</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-orange-500" />
              Uptime & Reliability
            </CardTitle>
            <CardDescription>Service availability metrics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">GPT-4</span>
                <Badge className="bg-green-100 text-green-700">99.9%</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Claude 3</span>
                <Badge className="bg-green-100 text-green-700">99.7%</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Gemini Pro</span>
                <Badge className="bg-green-100 text-green-700">99.5%</Badge>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              Based on 30-day rolling average
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wifi className="h-5 w-5 text-green-500" />
              Access Methods
            </CardTitle>
            <CardDescription>How to use each platform</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Web Interface</span>
                <Badge variant="outline">All</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Mobile Apps</span>
                <Badge variant="outline">Most</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">API Access</span>
                <Badge variant="outline">All</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Desktop Apps</span>
                <Badge variant="outline">Limited</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Mobile Availability</CardTitle>
            <CardDescription>iOS and Android apps</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="p-3 border rounded-lg">
                <p className="font-medium text-sm">ChatGPT</p>
                <div className="flex gap-2 mt-1">
                  <Badge variant="outline" className="text-xs">iOS</Badge>
                  <Badge variant="outline" className="text-xs">Android</Badge>
                </div>
              </div>
              <div className="p-3 border rounded-lg">
                <p className="font-medium text-sm">Claude</p>
                <div className="flex gap-2 mt-1">
                  <Badge variant="outline" className="text-xs">iOS</Badge>
                  <Badge variant="outline" className="text-xs">Android</Badge>
                </div>
              </div>
              <div className="p-3 border rounded-lg">
                <p className="font-medium text-sm">Gemini</p>
                <div className="flex gap-2 mt-1">
                  <Badge variant="outline" className="text-xs">iOS</Badge>
                  <Badge variant="outline" className="text-xs">Android</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Regional Considerations</CardTitle>
          <CardDescription>Important factors for different regions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Europe (GDPR)</h4>
              <p className="text-sm text-blue-700 mb-2">
                All major platforms comply with GDPR requirements
              </p>
              <p className="text-xs text-blue-600">
                Data processing agreements available for enterprise users
              </p>
            </div>
            <div className="p-4 bg-red-50 rounded-lg">
              <h4 className="font-semibold text-red-900 mb-2">China</h4>
              <p className="text-sm text-red-700 mb-2">
                Limited access to international AI services
              </p>
              <p className="text-xs text-red-600">
                Local alternatives and VPN considerations required
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">Americas</h4>
              <p className="text-sm text-green-700 mb-2">
                Full access to all platforms and features
              </p>
              <p className="text-xs text-green-600">
                Priority access to new features and models
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Availability;
