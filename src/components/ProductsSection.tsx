
import { ExternalLink, FileText, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Products</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative solutions that power modern businesses
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Celero Product Card */}
          <Card className="group relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <CardHeader className="relative z-10 pb-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp size={28} className="text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  Celero
                </CardTitle>
              </div>
              <CardDescription className="text-lg text-gray-700 leading-relaxed">
                A dynamic discounting and supply chain finance platform that connects buyers and suppliers, enabling efficient financial flows and strengthening business relationships.
              </CardDescription>
            </CardHeader>
            
            <CardContent className="relative z-10">
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Supply chain finance optimization
                </div>
                <div className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  Dynamic discounting solutions
                </div>
                <div className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                  Buyer-supplier connectivity
                </div>
              </div>
              
              <Button
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.open('https://celero.mk/en/home', '_blank')}
              >
                Explore Celero
                <ExternalLink size={18} className="ml-2" />
              </Button>
            </CardContent>
            
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </Card>

          {/* AI Invoice & PO Reader Card */}
          <Card className="group relative overflow-hidden bg-gradient-to-br from-indigo-50 to-cyan-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <CardHeader className="relative z-10 pb-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FileText size={28} className="text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                  AI Invoice & PO Reader
                </CardTitle>
              </div>
              <CardDescription className="text-lg text-gray-700 leading-relaxed">
                AI tool that extracts structured data from scanned invoices and purchase orders and exports to Excel, streamlining document processing workflows.
              </CardDescription>
            </CardHeader>
            
            <CardContent className="relative z-10">
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                  AI-powered data extraction
                </div>
                <div className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-cyan-600 rounded-full mr-3"></div>
                  Automated Excel export
                </div>
                <div className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Document workflow automation
                </div>
              </div>
              
              <Button
                variant="outline"
                className="w-full border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white font-semibold py-3 transition-all duration-300"
              >
                Coming Soon
              </Button>
            </CardContent>
            
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
