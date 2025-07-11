from django.shortcuts import render


def home(request):
    return render(request, 'home.html')

def about(request):
    return render(request, 'about.html')

def website_development(request):
    return render(request, 'services/website_development.html')

def software_development(request):
    return render(request, 'services/software_development.html')

def products(request):
    return render(request, 'products.html')

def careers(request):
    return render(request, 'careers.html')

def contact(request):
    if request.method == 'POST':
        # Process form data here
        pass
    return render(request, 'contact.html')

def courses(request):
    return render(request, 'courses.html')

def services(request):
    return render(request, 'services.html')

def portfolio(request):
    return render(request, 'portfolio.html')



def process(request):
    return render(request, 'process.html')


def portfolio_detail(request):
    return render(request, 'portfolio.html')

def team(request):
    return render(request, 'team.html')

def blog_detail(request):
    return render(request, 'blog_detail.html')

def blog(request):
    return render(request, 'blog_detail.html')


def faq(request):
    return render(request, 'blog_detail.html')