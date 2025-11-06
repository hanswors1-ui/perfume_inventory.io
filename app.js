// Perfume Inventory Management System

class PerfumeInventory {
    constructor() {
        this.perfumes = this.loadFromLocalStorage();
        this.knownBrands = this.getKnownBrands();
        this.knownPerfumes = this.getKnownPerfumes();
        this.allKnownPerfumeNames = this.getAllKnownPerfumeNames();
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupAutocomplete();
        this.renderInventory();
        this.updateStats();
    }

    getKnownBrands() {
        // Start with popular brands
        const popularBrands = [
            'Chanel', 'Dior', 'Tom Ford', 'Creed', 'Yves Saint Laurent', 'Giorgio Armani',
            'Gucci', 'Versace', 'Prada', 'Dolce & Gabbana', 'Burberry', 'Calvin Klein',
            'Hugo Boss', 'Hermès', 'Jo Malone', 'Le Labo', 'Maison Francis Kurkdjian',
            'Byredo', 'Parfums de Marly', 'Acqua di Parma', 'Amouage', 'Atelier Cologne',
            'Chloe', 'Givenchy', 'Lancôme', 'Marc Jacobs', 'Montblanc', 'Paco Rabanne',
            'Thierry Mugler', 'Viktor & Rolf', 'Valentino', 'Carolina Herrera',
            'Estée Lauder', 'Jean Paul Gaultier', 'Kilian', 'Narciso Rodriguez',
            'Penhaligon\'s', 'Roja Parfums', 'Xerjoff', 'Nishane', 'Mancera', 'Montale'
        ];
        
        // Add brands from existing inventory
        const inventoryBrands = [...new Set(this.perfumes.map(p => p.brand))];
        
        // Combine and sort
        return [...new Set([...popularBrands, ...inventoryBrands])].sort();
    }

    getKnownPerfumes() {
        // Get perfume names from existing inventory grouped by brand
        const perfumesByBrand = {};
        this.perfumes.forEach(p => {
            if (!perfumesByBrand[p.brand]) {
                perfumesByBrand[p.brand] = [];
            }
            if (!perfumesByBrand[p.brand].includes(p.name)) {
                perfumesByBrand[p.brand].push(p.name);
            }
        });
        return perfumesByBrand;
    }

    getAllKnownPerfumeNames() {
        // Comprehensive perfume names list
        const popularPerfumes = [
            // Chanel
            'Bleu de Chanel', 'Bleu de Chanel EDT', 'Bleu de Chanel EDP', 'Bleu de Chanel Parfum',
            'Coco Mademoiselle', 'Coco Mademoiselle Intense', 'Coco Mademoiselle EDP',
            'No. 5', 'No. 5 L\'Eau', 'No. 5 Eau Premiere', 'Chance', 'Chance Eau Tendre',
            'Chance Eau Fraiche', 'Chance Eau Vive', 'Allure', 'Allure Homme Sport',
            'Allure Homme Sport Eau Extreme', 'Gabrielle', 'Coco Noir',
            
            // Dior
            'Sauvage', 'Sauvage EDT', 'Sauvage EDP', 'Sauvage Parfum', 'Sauvage Elixir',
            'J\'adore', 'J\'adore Absolu', 'J\'adore Infinissime', 'Miss Dior',
            'Miss Dior Blooming Bouquet', 'Miss Dior Absolutely Blooming',
            'Eau Sauvage', 'Dior Homme', 'Dior Homme Intense', 'Dior Homme Parfum',
            'Fahrenheit', 'Hypnotic Poison', 'Pure Poison', 'Joy',
            
            // Tom Ford
            'Tobacco Vanille', 'Oud Wood', 'Oud Wood Intense', 'Lost Cherry',
            'Bitter Peach', 'Ombré Leather', 'Ombré Leather Parfum', 'Noir Extreme',
            'Noir de Noir', 'Tuscan Leather', 'Black Orchid', 'Soleil Blanc',
            'Neroli Portofino', 'Costa Azzurra', 'Fucking Fabulous', 'Jasmin Rouge',
            
            // Creed
            'Aventus', 'Aventus Cologne', 'Aventus for Her', 'Silver Mountain Water',
            'Green Irish Tweed', 'Millesime Imperial', 'Viking', 'Viking Cologne',
            'Carmina', 'Original Santal', 'Erolfa', 'Royal Oud',
            
            // YSL
            'La Vie Est Belle', 'Black Opium', 'Black Opium Extreme', 'Black Opium Illicit',
            'Mon Paris', 'Mon Paris Intensement', 'Libre', 'Libre Intense',
            'La Nuit de L\'Homme', 'La Nuit de L\'Homme Bleu Electrique', 'L\'Homme',
            'Y', 'Y EDP', 'Y Le Parfum', 'Opium', 'Kouros',
            
            // Thierry Mugler
            'Angel', 'Angel Muse', 'Angel Nova', 'Alien', 'Alien Essence Absolue',
            'Alien Fusion', 'A*Men', 'Pure Havane', 'Pure Malt', 'Pure Tonka',
            'Aura', 'Womanity', 'Cologne',
            
            // Viktor & Rolf
            'Flowerbomb', 'Flowerbomb Bloom', 'Flowerbomb Dew', 'Flowerbomb Midnight',
            'Spicebomb', 'Spicebomb Extreme', 'Spicebomb Infrared', 'Spicebomb Night Vision',
            'Bonbon', 'Good Fortune',
            
            // Versace
            'Eros', 'Eros Flame', 'Eros Pour Femme', 'Dylan Blue', 'Dylan Blue Pour Femme',
            'Dylan Turquoise', 'Crystal Noir', 'Bright Crystal', 'Pour Homme',
            'The Dreamer', 'Versace Pour Homme Dylan Blue',
            
            // Giorgio Armani
            'Acqua di Gio', 'Acqua di Gio Profumo', 'Acqua di Gio Absolu',
            'Acqua di Gio Profondo', 'Armani Code', 'Armani Code Absolu',
            'Armani Code Profumo', 'Si', 'Si Passione', 'Si Intense',
            'Stronger With You', 'Stronger With You Intensely', 'My Way',
            
            // Paco Rabanne
            'One Million', 'One Million Prive', 'One Million Lucky', 'One Million Parfum',
            'Invictus', 'Invictus Intense', 'Invictus Legend', 'Invictus Victory',
            'Phantom', 'Olympea', 'Olympea Intense', 'Lady Million',
            
            // Gucci
            'Guilty', 'Guilty Absolute', 'Guilty Black', 'Guilty Intense',
            'Bloom', 'Bloom Ambrosia di Fiori', 'Flora', 'Flora Gorgeous Gardenia',
            'Bamboo', 'Guilty Pour Homme', 'Guilty Love Edition',
            
            // Prada
            'Luna Rossa', 'Luna Rossa Black', 'Luna Rossa Carbon', 'L\'Homme',
            'L\'Homme Intense', 'Candy', 'Candy Kiss', 'Candy Gloss', 'Infusion d\'Iris',
            
            // MFK (Maison Francis Kurkdjian)
            'Baccarat Rouge 540', 'Baccarat Rouge 540 Extrait', 'Grand Soir',
            'Oud Satin Mood', 'Oud Satin Mood Extrait', 'Aqua Universalis',
            'A La Rose', 'Gentle Fluidity Gold', 'Gentle Fluidity Silver',
            
            // Parfums de Marly
            'Delina', 'Delina Exclusif', 'Delina La Rosée', 'Layton', 'Layton Exclusif',
            'Herod', 'Pegasus', 'Pegasus Exclusif', 'Sedley', 'Percival',
            'Carlisle', 'Oajan', 'Kalan', 'Greenley', 'Althair',
            
            // Byredo
            'Gypsy Water', 'Bal d\'Afrique', 'Mojave Ghost', 'Blanche', 'Pulp',
            'Super Cedar', 'Black Saffron', 'Bibliothèque', 'La Tulipe',
            
            // Le Labo
            'Santal 33', 'Another 13', 'The Noir 29', 'Rose 31', 'Bergamote 22',
            'Neroli 36', 'Jasmin 17', 'Tonka 25',
            
            // Montale & Mancera
            'Black Aoud', 'Intense Cafe', 'Roses Musk', 'Chocolate Greedy',
            'Red Aoud', 'Aoud Lime', 'Cedrat Boise', 'Red Tobacco', 'Roses Vanille',
            
            // Niche Turkish/Middle Eastern Brands
            'Instant Crush', 'Cedrat Boise', 'Red Tobacco', 'Aoud Lemon Mint',
            'Hindu Kush', 'Sicily', 'Blue Amber', 'Vanille Absolu',
            
            // Carolina Herrera
            'Good Girl', 'Good Girl Supreme', 'Very Good Girl', 'Bad Boy',
            'Bad Boy Cobalt', '212', '212 VIP', 'CH Men Prive',
            
            // Lancôme
            'La Vie Est Belle', 'La Vie Est Belle Intensement', 'Idôle',
            'Trésor', 'Hypnôse', 'Miracle',
            
            // Burberry
            'Burberry Her', 'Burberry Her Intense', 'Burberry London',
            'Burberry Brit', 'Mr. Burberry', 'Mr. Burberry Indigo',
            
            // Dolce & Gabbana
            'The One', 'The One EDP', 'Light Blue', 'Light Blue Intense',
            'Light Blue Pour Homme', 'K by Dolce & Gabbana', 'Dolce',
            
            // Calvin Klein
            'CK One', 'CK Be', 'Euphoria', 'Obsession', 'Eternity',
            
            // Hugo Boss
            'Boss Bottled', 'Boss Bottled Intense', 'The Scent', 'The Scent Intense',
            
            // Jo Malone
            'Wood Sage & Sea Salt', 'English Pear & Freesia', 'Lime Basil & Mandarin',
            'Peony & Blush Suede', 'Myrrh & Tonka', 'Oud & Bergamot',
            
            // Other Popular
            'Portrait of a Lady', 'Ombre Nomade', 'Tuscan Leather', 'Interlude Man',
            'Angels Share', 'Elysium', 'Orpheon', 'Royal Princess Oud'
        ];
        
        // Get all unique perfume names from inventory
        const inventoryPerfumes = [...new Set(this.perfumes.map(p => p.name))];
        
        // Combine and sort
        return [...new Set([...popularPerfumes, ...inventoryPerfumes])].sort();
    }

    setupAutocomplete() {
        const brandInput = document.getElementById('brand');
        const perfumeInput = document.getElementById('perfumeName');
        
        // Create autocomplete containers
        this.createAutocompleteContainer(brandInput);
        this.createAutocompleteContainer(perfumeInput);
        
        // Setup brand autocomplete
        this.setupBrandAutocomplete(brandInput);
        
        // Setup perfume name autocomplete
        this.setupPerfumeAutocomplete(perfumeInput);
    }

    createAutocompleteContainer(input) {
        // Create autocomplete container if it doesn't exist
        let container = document.getElementById(input.id + '-autocomplete-list');
        if (!container) {
            container = document.createElement('div');
            container.className = 'autocomplete-items';
            container.id = input.id + '-autocomplete-list';
            input.parentNode.appendChild(container);
        }
    }

    setupBrandAutocomplete(input) {
        let currentFocus = -1;
        
        // Input event listener
        input.addEventListener('input', (e) => {
            const value = e.target.value;
            currentFocus = -1;
            
            // Clear and get the list container
            const list = document.getElementById(input.id + '-autocomplete-list');
            list.innerHTML = '';
            
            if (!value) return;
            
            // Filter and display suggestions - always get fresh brand list
            const filtered = this.knownBrands.filter(item => 
                item.toLowerCase().includes(value.toLowerCase())
            ).slice(0, 10);
            
            filtered.forEach(item => {
                const div = document.createElement('div');
                div.className = 'autocomplete-item';
                
                // Highlight matching part
                const matchIndex = item.toLowerCase().indexOf(value.toLowerCase());
                div.innerHTML = item.substring(0, matchIndex) +
                               '<strong>' + item.substring(matchIndex, matchIndex + value.length) + '</strong>' +
                               item.substring(matchIndex + value.length);
                
                div.addEventListener('click', () => {
                    input.value = item;
                    list.innerHTML = '';
                    // Update perfume suggestions when brand is selected
                    this.updatePerfumeSuggestions();
                });
                
                list.appendChild(div);
            });
        });
        
        // Keyboard navigation
        this.setupKeyboardNavigation(input, () => currentFocus, (val) => currentFocus = val);
    }

    setupPerfumeAutocomplete(input) {
        let currentFocus = -1;
        
        // Input event listener
        input.addEventListener('input', (e) => {
            const value = e.target.value;
            currentFocus = -1;
            
            // Clear and get the list container
            const list = document.getElementById(input.id + '-autocomplete-list');
            list.innerHTML = '';
            
            if (!value) return;
            
            // Get current brand
            const brand = document.getElementById('brand').value;
            const perfumesForBrand = this.knownPerfumes[brand] || [];
            
            // Combine brand-specific perfumes with all known perfumes
            // Prioritize brand-specific ones
            const allSuggestions = [...new Set([...perfumesForBrand, ...this.allKnownPerfumeNames])];
            
            // Filter and display suggestions
            const filtered = allSuggestions.filter(item => 
                item.toLowerCase().includes(value.toLowerCase())
            ).slice(0, 10);
            
            filtered.forEach(item => {
                const div = document.createElement('div');
                div.className = 'autocomplete-item';
                
                // Highlight matching part
                const matchIndex = item.toLowerCase().indexOf(value.toLowerCase());
                div.innerHTML = item.substring(0, matchIndex) +
                               '<strong>' + item.substring(matchIndex, matchIndex + value.length) + '</strong>' +
                               item.substring(matchIndex + value.length);
                
                div.addEventListener('click', () => {
                    input.value = item;
                    list.innerHTML = '';
                });
                
                list.appendChild(div);
            });
        });
        
        // Keyboard navigation
        this.setupKeyboardNavigation(input, () => currentFocus, (val) => currentFocus = val);
    }

    setupKeyboardNavigation(input, getCurrentFocus, setCurrentFocus) {
        input.addEventListener('keydown', (e) => {
            const list = document.getElementById(input.id + '-autocomplete-list');
            const items = list ? list.getElementsByClassName('autocomplete-item') : [];
            
            if (e.keyCode === 40) { // Down arrow
                let currentFocus = getCurrentFocus();
                currentFocus++;
                this.setActive(items, currentFocus);
                setCurrentFocus(currentFocus);
                e.preventDefault();
            } else if (e.keyCode === 38) { // Up arrow
                let currentFocus = getCurrentFocus();
                currentFocus--;
                this.setActive(items, currentFocus);
                setCurrentFocus(currentFocus);
                e.preventDefault();
            } else if (e.keyCode === 13) { // Enter
                let currentFocus = getCurrentFocus();
                if (currentFocus > -1 && items[currentFocus]) {
                    items[currentFocus].click();
                    e.preventDefault();
                }
            }
        });
    }

    setActive(items, index) {
        if (!items || items.length === 0) return;
        
        // Remove active class from all items
        Array.from(items).forEach(item => item.classList.remove('autocomplete-active'));
        
        // Add active class to current item
        if (index >= items.length) index = 0;
        if (index < 0) index = items.length - 1;
        
        if (items[index]) {
            items[index].classList.add('autocomplete-active');
            items[index].scrollIntoView({ block: 'nearest' });
        }
    }

    closeAllLists(excludeId) {
        const items = document.getElementsByClassName('autocomplete-items');
        Array.from(items).forEach(item => {
            // Clear all lists, or clear all except the excluded one
            if (!excludeId || item.id !== excludeId + '-autocomplete-list') {
                item.innerHTML = '';
            }
        });
    }

    updatePerfumeSuggestions() {
        // Just clear the perfume input so user can start fresh
        const perfumeInput = document.getElementById('perfumeName');
        perfumeInput.value = '';
        perfumeInput.focus();
    }

    setupEventListeners() {
        // Form submission
        document.getElementById('perfumeForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.addPerfume();
        });

        // Search functionality
        document.getElementById('searchInput').addEventListener('input', (e) => {
            this.searchInventory(e.target.value);
        });

        // Export functionality
        document.getElementById('exportBtn').addEventListener('click', () => {
            this.exportToCSV();
        });

        // Backup functionality
        document.getElementById('backupBtn').addEventListener('click', () => {
            this.backupInventory();
        });

        // Restore functionality
        document.getElementById('restoreBtn').addEventListener('click', () => {
            document.getElementById('restoreFile').click();
        });

        document.getElementById('restoreFile').addEventListener('change', (e) => {
            this.restoreInventory(e.target.files[0]);
        });

        // Check batch code on CheckFresh
        document.getElementById('checkBatchBtn').addEventListener('click', () => {
            this.checkBatchCode();
        });

        // Close autocomplete when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.matches('#brand') && !e.target.matches('#perfumeName')) {
                this.closeAllLists();
            }
        });
    }

    addPerfume() {
        const perfume = {
            id: Date.now(),
            name: document.getElementById('perfumeName').value,
            brand: document.getElementById('brand').value,
            batchCode: document.getElementById('batchCode').value,
            productionDate: document.getElementById('productionDate').value,
            quantity: parseInt(document.getElementById('quantity').value),
            size: parseFloat(document.getElementById('size').value),
            status: document.getElementById('status').value,
            notes: document.getElementById('notes').value,
            addedDate: new Date().toISOString()
        };

        this.perfumes.push(perfume);
        this.saveToLocalStorage();
        
        // Update known brands and perfumes for autocomplete
        this.knownBrands = this.getKnownBrands();
        this.knownPerfumes = this.getKnownPerfumes();
        this.allKnownPerfumeNames = this.getAllKnownPerfumeNames();
        
        this.renderInventory();
        this.updateStats();
        this.resetForm();
        this.showToast('Perfume added successfully!');
    }

    updateStatus(id, newStatus) {
        const perfume = this.perfumes.find(p => p.id === id);
        if (perfume) {
            perfume.status = newStatus;
            this.saveToLocalStorage();
            this.renderInventory();
            this.updateStats();
            this.showToast(`Status updated to "${this.getStatusLabel(newStatus)}"`);
        }
    }

    getStatusLabel(status) {
        const labels = {
            'owned': 'Owned',
            'want-to-get': 'Want to Get',
            'want-to-try': 'Want to Try',
            'for-sale': 'For Sale',
            'sold': 'Sold'
        };
        return labels[status] || status;
    }

    getStatusClass(status) {
        const classes = {
            'owned': 'status-owned',
            'want-to-get': 'status-want-to-get',
            'want-to-try': 'status-want-to-try',
            'for-sale': 'status-for-sale',
            'sold': 'status-sold'
        };
        return classes[status] || 'status-owned';
    }

    deletePerfume(id) {
        if (confirm('Are you sure you want to delete this perfume from inventory?')) {
            this.perfumes = this.perfumes.filter(p => p.id !== id);
            this.saveToLocalStorage();
            this.renderInventory();
            this.updateStats();
            this.showToast('Perfume deleted successfully!');
        }
    }

    renderInventory(perfumesToRender = this.perfumes) {
        const container = document.getElementById('inventoryTable');
        
        if (perfumesToRender.length === 0) {
            container.innerHTML = '<div class="no-data">No perfumes in inventory. Add your first perfume above!</div>';
            return;
        }

        const table = `
            <div class="inventory-table">
                <table>
                    <thead>
                        <tr>
                            <th>Perfume Name</th>
                            <th>Brand</th>
                            <th>Batch Code</th>
                            <th>Production Date</th>
                            <th>Quantity</th>
                            <th>Size (ml)</th>
                            <th>Status</th>
                            <th>Notes</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${perfumesToRender.map(perfume => {
                            const status = perfume.status || 'owned';
                            return `
                            <tr class="${this.getStatusClass(status)}">
                                <td><strong>${perfume.name}</strong></td>
                                <td>${perfume.brand}</td>
                                <td>
                                    <div class="batch-info">
                                        <span class="batch-code">${perfume.batchCode}</span>
                                    </div>
                                </td>
                                <td>
                                    <span class="production-date">
                                        ${this.formatDate(perfume.productionDate)}
                                    </span>
                                </td>
                                <td>${perfume.quantity}</td>
                                <td>${perfume.size} ml</td>
                                <td>
                                    <span class="status-badge ${this.getStatusClass(status)}">
                                        ${this.getStatusLabel(status)}
                                    </span>
                                    <div class="status-actions">
                                        <select class="status-select" onchange="inventory.updateStatus(${perfume.id}, this.value)" value="${status}">
                                            <option value="owned" ${status === 'owned' ? 'selected' : ''}>Owned</option>
                                            <option value="want-to-get" ${status === 'want-to-get' ? 'selected' : ''}>Want to Get</option>
                                            <option value="want-to-try" ${status === 'want-to-try' ? 'selected' : ''}>Want to Try</option>
                                            <option value="for-sale" ${status === 'for-sale' ? 'selected' : ''}>For Sale</option>
                                            <option value="sold" ${status === 'sold' ? 'selected' : ''}>Sold</option>
                                        </select>
                                    </div>
                                </td>
                                <td>${perfume.notes || '-'}</td>
                                <td>
                                    <button class="btn btn-delete" onclick="inventory.deletePerfume(${perfume.id})">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        `}).join('')}
                    </tbody>
                </table>
            </div>
        `;

        container.innerHTML = table;
    }

    searchInventory(query) {
        const filtered = this.perfumes.filter(perfume => {
            const searchTerm = query.toLowerCase();
            return (
                perfume.name.toLowerCase().includes(searchTerm) ||
                perfume.brand.toLowerCase().includes(searchTerm) ||
                perfume.batchCode.toLowerCase().includes(searchTerm) ||
                perfume.productionDate.includes(searchTerm)
            );
        });
        this.renderInventory(filtered);
    }

    updateStats() {
        // Total items
        document.getElementById('totalItems').textContent = this.perfumes.length;

        // Total brands
        const uniqueBrands = new Set(this.perfumes.map(p => p.brand));
        document.getElementById('totalBrands').textContent = uniqueBrands.size;

        // Total quantity
        const totalQuantity = this.perfumes.reduce((sum, p) => sum + p.quantity, 0);
        document.getElementById('totalQuantity').textContent = totalQuantity;

        // Status counts
        const statusCounts = this.perfumes.reduce((acc, p) => {
            const status = p.status || 'owned';
            acc[status] = (acc[status] || 0) + 1;
            return acc;
        }, {});

        document.getElementById('ownedCount').textContent = statusCounts['owned'] || 0;
        document.getElementById('wantToGetCount').textContent = statusCounts['want-to-get'] || 0;
        document.getElementById('wantToTryCount').textContent = statusCounts['want-to-try'] || 0;
        document.getElementById('forSaleCount').textContent = statusCounts['for-sale'] || 0;
        document.getElementById('soldCount').textContent = statusCounts['sold'] || 0;
    }

    checkBatchCode() {
        const batchCode = document.getElementById('batchCode').value.trim();
        const brand = document.getElementById('brand').value.trim();
        
        if (!batchCode) {
            alert('Please enter a batch code first');
            return;
        }
        
        // Copy batch code to clipboard
        navigator.clipboard.writeText(batchCode).then(() => {
            this.showBatchCodeModal(batchCode, brand);
        }).catch(() => {
            // If clipboard fails, still show modal
            this.showBatchCodeModal(batchCode, brand);
        });
    }

    showBatchCodeModal(batchCode, brand) {
        // Create modal overlay
        const modal = document.createElement('div');
        modal.className = 'batch-modal-overlay';
        modal.innerHTML = `
            <div class="batch-modal">
                <h3>Check Batch Code: ${batchCode}</h3>
                <p class="batch-brand">${brand || 'Brand not specified'}</p>
                <div class="batch-code-display">
                    <code>${batchCode}</code>
                    <button class="btn-copy" onclick="navigator.clipboard.writeText('${batchCode}'); this.textContent='Copied!'">Copy</button>
                </div>
                <p class="batch-instruction">Batch code copied to clipboard! Choose a site to verify:</p>
                <div class="batch-links">
                    <a href="https://www.checkcosmetic.net/" target="_blank" class="batch-link">
                        <strong>CheckCosmetic.net</strong>
                        <small>Clean interface, no popups</small>
                    </a>
                    <a href="https://www.checkfresh.com/" target="_blank" class="batch-link">
                        <strong>CheckFresh.com</strong>
                        <small>Popular batch checker</small>
                    </a>
                    <a href="https://www.calculator.tf/cosmetics-calculator/" target="_blank" class="batch-link">
                        <strong>Calculator.tf</strong>
                        <small>Simple calculator tool</small>
                    </a>
                </div>
                <button class="btn btn-close" onclick="this.closest('.batch-modal-overlay').remove()">Close</button>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Close modal when clicking overlay
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
        
        this.showToast(`Batch code "${batchCode}" copied to clipboard!`);
    }

    formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    }

    resetForm() {
        document.getElementById('perfumeForm').reset();
    }

    showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.remove();
        }, 3000);
    }

    saveToLocalStorage() {
        localStorage.setItem('perfumeInventory', JSON.stringify(this.perfumes));
    }

    loadFromLocalStorage() {
        const data = localStorage.getItem('perfumeInventory');
        return data ? JSON.parse(data) : [];
    }

    exportToCSV() {
        if (this.perfumes.length === 0) {
            alert('No data to export!');
            return;
        }

        const headers = ['Perfume Name', 'Brand', 'Batch Code', 'Production Date', 'Quantity', 'Size (ml)', 'Status', 'Notes', 'Added Date'];
        const csvContent = [
            headers.join(','),
            ...this.perfumes.map(p => [
                `"${p.name}"`,
                `"${p.brand}"`,
                `"${p.batchCode}"`,
                p.productionDate,
                p.quantity,
                p.size,
                `"${this.getStatusLabel(p.status || 'owned')}"`,
                `"${p.notes || ''}"`,
                new Date(p.addedDate).toLocaleDateString()
            ].join(','))
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        
        link.setAttribute('href', url);
        link.setAttribute('download', `perfume_inventory_${new Date().toISOString().split('T')[0]}.csv`);
        link.style.visibility = 'hidden';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        this.showToast('Inventory exported successfully!');
    }

    backupInventory() {
        if (this.perfumes.length === 0) {
            alert('No data to backup!');
            return;
        }

        const backup = {
            version: '1.0',
            exportDate: new Date().toISOString(),
            perfumes: this.perfumes
        };

        const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        
        link.setAttribute('href', url);
        link.setAttribute('download', `perfume_backup_${new Date().toISOString().split('T')[0]}.json`);
        link.style.visibility = 'hidden';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        this.showToast('Backup created successfully!');
    }

    restoreInventory(file) {
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const backup = JSON.parse(e.target.result);
                
                if (!backup.perfumes || !Array.isArray(backup.perfumes)) {
                    throw new Error('Invalid backup file format');
                }

                if (confirm(`This will restore ${backup.perfumes.length} perfume(s) from ${new Date(backup.exportDate).toLocaleDateString()}. Current inventory will be replaced. Continue?`)) {
                    this.perfumes = backup.perfumes;
                    this.saveToLocalStorage();
                    this.renderInventory();
                    this.updateStats();
                    this.showToast('Inventory restored successfully!');
                }
            } catch (error) {
                alert('Error restoring backup: ' + error.message);
            }
            
            // Reset file input
            document.getElementById('restoreFile').value = '';
        };
        
        reader.readAsText(file);
    }
}

// Initialize the inventory system
const inventory = new PerfumeInventory();
