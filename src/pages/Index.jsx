import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="relative h-[400px] flex items-center justify-center text-white">
        <img
          src="/placeholder.svg"
          alt="River during rainfall"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center">
          <Typography variant="h1" className="mb-4">
            Impact of Rain on River Water Pollution
          </Typography>
          <Typography variant="h3">
            Understanding the Environmental Consequences
          </Typography>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Introduction Section */}
        <section className="mb-12">
          <Typography variant="h2" className="mb-4">Introduction</Typography>
          <Typography>
            Rain, while essential for life, can significantly impact river water pollution. 
            This natural process can lead to various environmental issues, affecting water quality 
            and ecosystem health. Understanding these effects is crucial for developing effective 
            strategies to protect our water resources.
          </Typography>
        </section>

        {/* Impact Details Section */}
        <section className="mb-12">
          <Typography variant="h2" className="mb-6">How Rain Affects River Water Pollution</Typography>
          
          <div className="space-y-6">
            <div>
              <Typography variant="h3" className="mb-2">Runoff</Typography>
              <Typography>
                Rainwater runoff can carry various pollutants into rivers, including sediments, 
                nutrients, and urban contaminants. As rain flows over surfaces like roads and 
                agricultural lands, it picks up these pollutants, eventually depositing them into 
                river systems.
              </Typography>
            </div>

            <div>
              <Typography variant="h3" className="mb-2">Erosion</Typography>
              <Typography>
                Heavy rainfall can cause significant soil erosion, especially in areas with 
                inadequate vegetation cover. This erosion leads to increased sediment in rivers, 
                which can harm aquatic life, alter river ecosystems, and affect water quality.
              </Typography>
            </div>

            <div>
              <Typography variant="h3" className="mb-2">Chemical Contaminants</Typography>
              <Typography>
                Rain can wash chemicals from agricultural fields, industrial sites, and urban 
                areas into rivers. These may include fertilizers, pesticides, and various urban 
                pollutants, all of which can have detrimental effects on water quality and 
                aquatic ecosystems.
              </Typography>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="mb-12">
          <Typography variant="h2" className="mb-6">Case Studies</Typography>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>River A</CardTitle>
              </CardHeader>
              <CardContent>
                <Typography>
                  River A experienced significant pollution increases during heavy rainfall events. 
                  Studies showed a 30% rise in nitrogen levels and a 25% increase in phosphorus, 
                  leading to algal blooms and decreased oxygen levels for aquatic life.
                </Typography>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>River B</CardTitle>
              </CardHeader>
              <CardContent>
                <Typography>
                  After implementing improved urban drainage systems, River B saw a 40% reduction 
                  in pollutant loads during rainstorms. This case demonstrates the potential for 
                  effective management strategies in mitigating rain-induced pollution.
                </Typography>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Conclusion Section */}
        <section>
          <Typography variant="h2" className="mb-4">Conclusion</Typography>
          <Typography>
            The impact of rain on river water pollution is a complex issue with far-reaching 
            consequences. From increased runoff and erosion to the introduction of chemical 
            contaminants, rainfall can significantly affect water quality and ecosystem health. 
            Understanding these processes is crucial for developing effective strategies to protect 
            our rivers and ensure sustainable water management for future generations.
          </Typography>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4">
          <Typography className="text-center text-gray-600">
            For more information, contact: info@riverpollutionstudy.org
          </Typography>
        </div>
      </footer>
    </div>
  );
};

export default Index;