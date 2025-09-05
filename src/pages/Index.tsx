import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const companyServices = [
    { title: "Недвижимость и строительство", icon: "Building" },
    { title: "IP/IT", icon: "Monitor" },
    { title: "Несостоятельность (банкротство)", icon: "AlertTriangle" },
    { title: "Разрешение споров", icon: "Gavel" },
    { title: "Общие вопросы", icon: "FileText" },
    { title: "Корпоративное право", icon: "Building2" },
    { title: "Налоговое и административное право", icon: "Calculator" },
    { title: "Уголовно-правовая защита", icon: "Shield" }
  ];

  const individualServices = [
    { title: "Разрешение конфликтов", desc: "Профессиональное решение споров" },
    { title: "Операции с личными активами", desc: "Управление и защита активов" },
    { title: "Налогообложение физических лиц", desc: "Налоговое планирование" },
    { title: "Персональный комплаенс", desc: "Соблюдение правовых норм" },
    { title: "Защита личных активов", desc: "Наследственное планирование" },
    { title: "Семейные споры", desc: "Семейное право" },
    { title: "Наследственные споры", desc: "Наследственные дела" },
    { title: "Жилищные споры", desc: "Жилищное право" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/20">
                <span className="font-playfair font-bold text-xl text-primary">AL</span>
              </div>
              <div>
                <h1 className="font-playfair text-2xl font-bold text-foreground">ASTRA LEGAL</h1>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="font-inter text-foreground/80 hover:text-foreground transition-colors">Услуги</a>
              <a href="#about" className="font-inter text-foreground/80 hover:text-foreground transition-colors">О компании</a>
              <a href="#contact" className="font-inter text-foreground/80 hover:text-foreground transition-colors">Контакты</a>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-inter">
                Консультация
              </Button>
            </div>

            <Button variant="ghost" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <div className="inline-block p-3 bg-primary/10 rounded-full mb-6">
                <Icon name="Scale" size={48} className="text-primary" />
              </div>
            </div>
            
            <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent animate-fade-in">
              ASTRA LEGAL
            </h1>
            
            <p className="font-inter text-xl md:text-2xl text-foreground/70 mb-8 max-w-2xl mx-auto animate-fade-in">
              Юридическая компания с многолетним опытом предоставления комплексных правовых услуг для бизнеса и частных лиц
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-inter px-8 py-3">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Бесплатная консультация
              </Button>
              <Button variant="outline" size="lg" className="border-primary/20 text-foreground hover:bg-primary/5 font-inter px-8 py-3">
                <Icon name="Phone" size={20} className="mr-2" />
                +7 (495) 123-45-67
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <Icon name="ChevronDown" size={32} className="text-primary" />
          </div>
        </div>
      </section>

      {/* Services for Companies */}
      <section id="services" className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold mb-4 text-card-foreground">Услуги для компаний</h2>
            <p className="font-inter text-lg text-card-foreground/70">Комплексные правовые решения для вашего бизнеса</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="inline-block p-4 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="font-inter font-semibold text-sm leading-tight text-card-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services for Individuals */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold mb-4">Услуги для физических лиц</h2>
            <p className="font-inter text-lg text-foreground/70">Персональная правовая поддержка</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {individualServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm">
                      {(index + 1).toString().padStart(2, '0')}
                    </div>
                    <div>
                      <h3 className="font-inter font-semibold mb-2 text-card-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="font-inter text-sm text-card-foreground/70">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-4xl font-bold mb-6 text-card-foreground">О компании</h2>
              <p className="font-inter text-lg text-card-foreground/80 mb-6">
                ASTRA LEGAL — это команда опытных юристов, специализирующихся на предоставлении высококачественных правовых услуг для корпоративных клиентов и частных лиц.
              </p>
              <p className="font-inter text-card-foreground/70 mb-8">
                Мы объединяем глубокие знания российского права с современными подходами к решению правовых задач, обеспечивая нашим клиентам надежную защиту их интересов.
              </p>
              
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-card-foreground/70">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-card-foreground/70">успешных дел</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-card-foreground/70">поддержка</div>
                </div>
              </div>
              
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-inter">
                Узнать больше
              </Button>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center border border-primary/20">
                <Icon name="Building" size={80} className="text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold mb-4">Контакты</h2>
            <p className="font-inter text-lg text-foreground/70">Свяжитесь с нами для получения консультации</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center border-border/50">
              <CardContent className="p-6">
                <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                  <Icon name="Phone" size={32} className="text-primary" />
                </div>
                <h3 className="font-inter font-semibold mb-2">Телефон</h3>
                <p className="text-foreground/70">+7 (495) 123-45-67</p>
                <p className="text-foreground/70">+7 (495) 123-45-68</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-border/50">
              <CardContent className="p-6">
                <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                  <Icon name="Mail" size={32} className="text-primary" />
                </div>
                <h3 className="font-inter font-semibold mb-2">Email</h3>
                <p className="text-foreground/70">info@astralegal.ru</p>
                <p className="text-foreground/70">office@astralegal.ru</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-border/50">
              <CardContent className="p-6">
                <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                  <Icon name="MapPin" size={32} className="text-primary" />
                </div>
                <h3 className="font-inter font-semibold mb-2">Адрес</h3>
                <p className="text-foreground/70">г. Москва, ул. Тверская, д. 10</p>
                <p className="text-foreground/70">БЦ "Центральный", офис 501</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-inter px-12 py-3">
              <Icon name="Calendar" size={20} className="mr-2" />
              Записаться на консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-card">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/20">
                  <span className="font-playfair font-bold text-lg text-primary">AL</span>
                </div>
                <h3 className="font-playfair text-xl font-bold text-card-foreground">ASTRA LEGAL</h3>
              </div>
              <p className="text-card-foreground/70 mb-6">
                Профессиональные юридические услуги для защиты ваших интересов
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                  <Icon name="Instagram" size={20} className="text-primary" />
                </div>
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                  <Icon name="Linkedin" size={20} className="text-primary" />
                </div>
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                  <Icon name="Mail" size={20} className="text-primary" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-inter font-semibold mb-4 text-card-foreground">Услуги</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-card-foreground/70 hover:text-primary transition-colors">Корпоративное право</a></li>
                <li><a href="#" className="text-card-foreground/70 hover:text-primary transition-colors">Разрешение споров</a></li>
                <li><a href="#" className="text-card-foreground/70 hover:text-primary transition-colors">Недвижимость</a></li>
                <li><a href="#" className="text-card-foreground/70 hover:text-primary transition-colors">IP/IT</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-inter font-semibold mb-4 text-card-foreground">Контакты</h4>
              <ul className="space-y-2">
                <li className="text-card-foreground/70">+7 (495) 123-45-67</li>
                <li className="text-card-foreground/70">info@astralegal.ru</li>
                <li className="text-card-foreground/70">г. Москва, ул. Тверская, д. 10</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border/50 mt-8 pt-8 text-center">
            <p className="text-card-foreground/70">&copy; 2024 ASTRA LEGAL. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;