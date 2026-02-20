// ==================== DATA & CONFIG ====================
const DATA = {
    categories: [
        { id: 'ceramics', title: 'Céramiques', description: 'Poteries de Safi et Fès', icon: '🏺' },
        // ... (incluez tous les objets de données ici)
    ],
    // ... rest of DATA object
};

// ==================== APP ENGINE ====================
const app = {
    cart: [],
    
    init() {
        this.renderNavbar();
        this.showHome();
        this.updateCartBadge();
        
        // Window events
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar?.classList.add('scrolled');
            } else {
                navbar?.classList.remove('scrolled');
            }
        });
    },

    // Méthodes de rendu extraites de votre fichier original
    renderNavbar() {
        // ... votre logique de navbar ...
    },

    showHome() {
        const container = document.getElementById('app');
        // ... votre logique d'affichage d'accueil ...
    },

    // ... (Collez ici toutes les autres fonctions : renderCategories, showBrand, addToCart, etc.)

    // Forms
    handleContactSubmit(e) {
        e.preventDefault();
        alert('Message envoyé ! Notre équipe vous répondra dans les plus brefs délais.');
        e.target.reset();
    }
};

// ==================== INITIALIZE ====================
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});
