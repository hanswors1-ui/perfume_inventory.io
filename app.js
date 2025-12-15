// Perfume Inventory Management System

// Translation System
const translations = {
    en: {
        title: "🌸 Perfume Inventory System",
        subtitle: "Track your perfume collection with batch codes and production dates",
        addNewPerfume: "Add New Perfume",
        brand: "Brand:",
        brandPlaceholder: "Start typing brand name...",
        perfumeName: "Perfume Name:",
        perfumeNamePlaceholder: "Start typing perfume name...",
        concentration: "Concentration:",
        concentrationEDP: "Eau de Parfum (EDP)",
        concentrationEDT: "Eau de Toilette (EDT)",
        concentrationParfum: "Parfum / Extrait",
        concentrationEDC: "Eau de Cologne (EDC)",
        concentrationEDL: "Eau de Légère",
        concentrationIntense: "Intense",
        concentrationElixir: "Elixir",
        concentrationAbsolu: "Absolu",
        concentrationOther: "Other",
        productionDate: "Production Date:",
        optionalYYYYMM: "(optional, YYYY-MM format)",
        optional: "(optional)",
        batchCode: "Batch Code:",
        batchCodePlaceholder: "Enter batch code from perfume (leave empty if none)",
        decode: "🔍 Decode",
        batchCodeHint: "💡 Click \"Decode\" to auto-fill production date. Check if date seems correct. Leave empty if no batch code.",
        quantity: "Quantity:",
        size: "Size (ml):",
        status: "Status:",
        statusOwned: "Owned",
        statusWantToGet: "Want to Get",
        statusWantToTry: "Want to Try",
        statusForSale: "For Sale",
        statusSold: "Sold",
        fragranceNotes: "Fragrance Notes",
        fragranceNotesPlaceholder: "e.g., Top: Bergamot, Lemon | Middle: Jasmine, Rose | Base: Vanilla, Musk",
        fragranceNotesHint: "💡 Add the perfume's notes (top, middle, base)",
        personalNotes: "Personal Notes",
        personalNotesPlaceholder: "Your thoughts, occasion, season, etc.",
        addToInventory: "Add to Inventory",
        currentInventory: "Current Inventory",
        searchPlaceholder: "Search by name, brand, or batch code...",
        exportToCSV: "Export to CSV",
        backup: "💾 Backup",
        restore: "📁 Restore",
        totalItems: "Total Items",
        brands: "Brands",
        totalUnits: "Total Units",
        viewBottles: "🧴 Full Bottles",
        viewDecants: "💧 Decants",
        // Table headers
        tableBrand: "Brand",
        tableName: "Name",
        tableProductionDate: "Production Date",
        tableBatchCode: "Batch Code",
        tableQuantity: "Qty",
        tableSize: "Size",
        tableStatus: "Status",
        tableFragranceNotes: "Fragrance Notes",
        tablePersonalNotes: "Personal Notes",
        tableActions: "Actions",
        tableConcentration: "Type",
        deleteButton: "Delete"
    },
    pl: {
        title: "🌸 System Inwentaryzacji Perfum",
        subtitle: "Śledź swoją kolekcję perfum z kodami partii i datami produkcji",
        addNewPerfume: "Dodaj Nowe Perfumy",
        brand: "Marka:",
        brandPlaceholder: "Zacznij wpisywać nazwę marki...",
        perfumeName: "Nazwa Perfum:",
        perfumeNamePlaceholder: "Zacznij wpisywać nazwę perfum...",
        concentration: "Koncentracja:",
        concentrationEDP: "Eau de Parfum (EDP)",
        concentrationEDT: "Eau de Toilette (EDT)",
        concentrationParfum: "Parfum / Ekstrakt",
        concentrationEDC: "Eau de Cologne (EDC)",
        concentrationEDL: "Eau de Légère",
        concentrationIntense: "Intense",
        concentrationElixir: "Elixir",
        concentrationAbsolu: "Absolu",
        concentrationOther: "Inne",
        productionDate: "Data Produkcji:",
        optionalYYYYMM: "(opcjonalne, format RRRR-MM)",
        optional: "(opcjonalne)",
        batchCode: "Kod Partii:",
        batchCodePlaceholder: "Wpisz kod partii z perfum (zostaw puste jeśli brak)",
        decode: "🔍 Dekoduj",
        batchCodeHint: "💡 Kliknij \"Dekoduj\" aby automatycznie wypełnić datę produkcji. Sprawdź czy data wydaje się poprawna. Zostaw puste jeśli brak kodu partii.",
        quantity: "Ilość:",
        size: "Pojemność (ml):",
        status: "Status:",
        statusOwned: "Posiadane",
        statusWantToGet: "Chcę Kupić",
        statusWantToTry: "Chcę Wypróbować",
        statusForSale: "Na Sprzedaż",
        statusSold: "Sprzedane",
        fragranceNotes: "Nuty Zapachowe",
        fragranceNotesPlaceholder: "np. Góra: Bergamotka, Cytryna | Środek: Jaśmin, Róża | Baza: Wanilia, Piżmo",
        fragranceNotesHint: "💡 Dodaj nuty perfum (góra, środek, baza)",
        personalNotes: "Notatki Osobiste",
        personalNotesPlaceholder: "Twoje przemyślenia, okazja, pora roku, itp.",
        addToInventory: "Dodaj do Inwentarza",
        currentInventory: "Aktualny Inwentarz",
        searchPlaceholder: "Szukaj po nazwie, marce lub kodzie partii...",
        exportToCSV: "Eksportuj do CSV",
        backup: "💾 Kopia zapasowa",
        restore: "📁 Przywróć",
        totalItems: "Wszystkie Pozycje",
        brands: "Marki",
        totalUnits: "Wszystkie Jednostki",
        viewBottles: "🧴 Pełne Butelki",
        viewDecants: "💧 Odlewki",
        // Table headers
        tableBrand: "Marka",
        tableName: "Nazwa",
        tableProductionDate: "Data Produkcji",
        tableBatchCode: "Kod Partii",
        tableQuantity: "Ilość",
        tableSize: "Pojemność",
        tableStatus: "Status",
        tableFragranceNotes: "Nuty Zapachowe",
        tablePersonalNotes: "Notatki Osobiste",
        tableActions: "Akcje",
        tableConcentration: "Typ",
        deleteButton: "Usuń"
    }
};

let currentLanguage = localStorage.getItem('preferredLanguage') || 'en';

function translate(key) {
    return translations[currentLanguage][key] || translations.en[key] || key;
}

function updatePageLanguage() {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = translate(key);
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        element.placeholder = translate(key);
    });

    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLanguage);
    });

    // Save preference
    localStorage.setItem('preferredLanguage', currentLanguage);
}

let currentView = localStorage.getItem('currentView') || 'bottles';

class PerfumeInventory {
    constructor() {
        this.perfumes = [];
        this.decants = this.loadFromLocalStorage('decants');
        this.knownPerfumes = {};
        this.allKnownPerfumeNames = [];
        this.init();
    }

    async loadFromAPI() {
        try {
            console.log('Loading perfumes from API...');
            const response = await fetch('Perfumes_api/perfume.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log(`Loaded ${data.length} perfumes from API`);
            this.perfumes = data;
            this.knownPerfumes = this.getKnownPerfumes();
            this.allKnownPerfumeNames = this.getAllKnownPerfumeNames();
            this.setupAutocomplete();
            console.log('Perfumes loaded successfully');
            return data;
        } catch (error) {
            console.error('Failed to load perfumes from API:', error);
            this.perfumes = [];
            return [];
        }
    }

    init() {
        this.setupEventListeners();
        this.setupLanguageSwitcher();
        this.setupViewSwitcher();
        updatePageLanguage();
        
        // Load perfumes from API after initialization
        this.loadFromAPI().then(() => {
            this.switchView(currentView);
        });
    }

    getCurrentList() {
        return currentView === 'bottles' ? this.perfumes : this.decants;
    }

    getKnownPerfumes() {
        // Get perfume names from both lists grouped by brand
        const perfumesByBrand = {};
        
        // Safely handle non-array perfumes
        const perfumesToProcess = Array.isArray(this.perfumes) ? this.perfumes : [];
        const decantsToProcess = Array.isArray(this.decants) ? this.decants : [];
        
        [...perfumesToProcess, ...decantsToProcess].forEach(p => {
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
        if (!Array.isArray(this.perfumes)) {
            return [];
        }
        return this.perfumes.map(perfume => perfume.name);
    }

    getKnownBrands() {
        if (!Array.isArray(this.perfumes)) {
            return [];
        }
        const brands = new Set();
        this.perfumes.forEach(perfume => {
            if (perfume.brand) {
                brands.add(perfume.brand);
            }
        });
        return Array.from(brands).sort();
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
            
            // Filter and display suggestions - always get fresh brand list from inventory
            const freshBrands = this.getKnownBrands();
            const filtered = freshBrands.filter(item => 
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
            
            // Get current brand and fresh perfume lists from inventory
            const brand = document.getElementById('brand').value;
            const freshKnownPerfumes = this.getKnownPerfumes();
            const freshAllPerfumes = this.getAllKnownPerfumeNames();
            const perfumesForBrand = freshKnownPerfumes[brand] || [];
            
            // Combine brand-specific perfumes with all known perfumes
            // Prioritize brand-specific ones
            const allSuggestions = [...new Set([...perfumesForBrand, ...freshAllPerfumes])];
            
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
        if (index < 0) items.length - 1;
        
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

        // Handle status change to make quantity/size optional for wishlist items
        document.getElementById('status').addEventListener('change', (e) => {
            this.updateFormFieldRequirements(e.target.value);
        });

        // Format production date input for YYYY-MM
        document.getElementById('productionDate').addEventListener('input', (e) => {
            let value = e.target.value.replace(/[^\d-]/g, ''); // Only digits and dash
            
            // Auto-insert dash after year
            if (value.length === 4 && !value.includes('-')) {
                value = value + '-';
            }
            
            // Limit to YYYY-MM format
            if (value.length > 7) {
                value = value.substring(0, 7);
            }
            
            e.target.value = value;
        });
    }

    updateFormFieldRequirements(status) {
        const quantityInput = document.getElementById('quantity');
        const sizeInput = document.getElementById('size');
        const quantityOptionalLabel = document.querySelector('#quantityGroup .optional-label');
        const sizeOptionalLabel = document.querySelector('#sizeGroup .optional-label');
        
        const isWishlist = status === 'want-to-get' || status === 'want-to-try';
        
        if (isWishlist) {
            // Make fields optional for wishlist items
            quantityInput.removeAttribute('required');
            sizeInput.removeAttribute('required');
            quantityOptionalLabel.style.display = 'inline';
            sizeOptionalLabel.style.display = 'inline';
        } else {
            // Make fields required for owned/for-sale/sold items
            quantityInput.setAttribute('required', 'required');
            sizeInput.setAttribute('required', 'required');
            quantityOptionalLabel.style.display = 'none';
            sizeOptionalLabel.style.display = 'none';
        }
    }

    setupLanguageSwitcher() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                currentLanguage = btn.getAttribute('data-lang');
                updatePageLanguage();
                this.renderInventory(); // Re-render to update table headers
            });
        });
    }

    setupViewSwitcher() {
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const view = btn.getAttribute('data-view');
                this.switchView(view);
            });
        });
    }

    switchView(view) {
        currentView = view;
        localStorage.setItem('currentView', view);
        
        // Update active button
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-view') === view);
        });
        
        // Update form fields based on view
        this.updateFormForView(view);
        
        this.renderInventory();
        this.updateStats();
    }

    updateFormForView(view) {
        const isDecants = view === 'decants';
        
        // Get the form groups for batch code and production date
        const batchCodeGroup = document.getElementById('batchCode').closest('.form-group');
        const productionDateGroup = document.getElementById('productionDate').closest('.form-group');
        
        // Hide/show based on view
        if (isDecants) {
            batchCodeGroup.style.display = 'none';
            productionDateGroup.style.display = 'none';
        } else {
            batchCodeGroup.style.display = 'block';
            productionDateGroup.style.display = 'block';
        }
    }

    addPerfume() {
        const status = document.getElementById('status').value;
        const quantityValue = document.getElementById('quantity').value;
        const sizeValue = document.getElementById('size').value;
        
        const perfume = {
            id: Date.now(),
            name: document.getElementById('perfumeName').value,
            brand: document.getElementById('brand').value,
            concentration: document.getElementById('concentration').value,
            batchCode: document.getElementById('batchCode').value,
            productionDate: document.getElementById('productionDate').value,
            quantity: quantityValue ? parseInt(quantityValue) : 0,
            size: sizeValue ? parseFloat(sizeValue) : 0,
            status: status,
            fragranceNotes: document.getElementById('fragranceNotes').value,
            notes: document.getElementById('notes').value,
            addedDate: new Date().toISOString()
        };

        // Add to current list (bottles or decants)
        if (currentView === 'bottles') {
            this.perfumes.push(perfume);
        } else {
            this.decants.push(perfume);
        }
        this.saveToLocalStorage();
        
        // Update known brands and perfumes for autocomplete
        this.knownPerfumes = this.getKnownPerfumes();
        this.allKnownPerfumeNames = this.getAllKnownPerfumeNames();
        
        this.renderInventory();
        this.updateStats();
        this.resetForm();
        const itemType = currentView === 'bottles' ? 'bottle' : 'decant';
        this.showToast(`${itemType.charAt(0).toUpperCase() + itemType.slice(1)} added successfully!`);
    }

    updateStatus(id, newStatus) {
        const currentList = this.getCurrentList();
        const perfume = currentList.find(p => p.id === id);
        if (perfume) {
            perfume.status = newStatus;
            this.saveToLocalStorage();
            this.renderInventory();
            this.updateStats();
            this.showToast(`Status updated to "${this.getStatusLabel(newStatus)}"`);
        }
    }

    editQuantity(id, cell) {
        const currentList = this.getCurrentList();
        const perfume = currentList.find(p => p.id === id);
        if (!perfume) return;

        const currentValue = perfume.quantity || 0;
        const valueSpan = cell.querySelector('.editable-value');
        
        // Create input
        const input = document.createElement('input');
        input.type = 'number';
        input.min = '0';
        input.value = currentValue;
        input.className = 'inline-edit-input';
        input.style.width = '60px';
        
        // Replace content with input
        cell.innerHTML = '';
        cell.appendChild(input);
        input.focus();
        input.select();

        // Save on blur or Enter
        const saveEdit = () => {
            const newValue = parseInt(input.value) || 0;
            perfume.quantity = newValue;
            this.saveToLocalStorage();
            this.renderInventory();
            this.updateStats();
        };

        input.addEventListener('blur', saveEdit);
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                saveEdit();
            }
        });
    }

    editSize(id, cell) {
        const currentList = this.getCurrentList();
        const perfume = currentList.find(p => p.id === id);
        if (!perfume) return;

        const currentValue = perfume.size || 0;
        const valueSpan = cell.querySelector('.editable-value');
        
        // Create input
        const input = document.createElement('input');
        input.type = 'number';
        input.min = '0';
        input.step = '0.1';
        input.value = currentValue;
        input.className = 'inline-edit-input';
        input.style.width = '70px';
        
        // Replace content with input
        cell.innerHTML = '';
        cell.appendChild(input);
        input.focus();
        input.select();

        // Save on blur or Enter
        const saveEdit = () => {
            const newValue = parseFloat(input.value) || 0;
            perfume.size = newValue;
            this.saveToLocalStorage();
            this.renderInventory();
            this.updateStats();
        };

        input.addEventListener('blur', saveEdit);
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                saveEdit();
            }
        });
    }

    editConcentration(id, cell) {
        const currentList = this.getCurrentList();
        const perfume = currentList.find(p => p.id === id);
        if (!perfume) return;

        const currentValue = perfume.concentration || 'edp';
        
        // Create select dropdown
        const select = document.createElement('select');
        select.className = 'inline-edit-select';
        
        const options = [
            { value: 'edp', label: translate('concentrationEDP') },
            { value: 'edt', label: translate('concentrationEDT') },
            { value: 'parfum', label: translate('concentrationParfum') },
            { value: 'edc', label: translate('concentrationEDC') },
            { value: 'edl', label: translate('concentrationEDL') },
            { value: 'intense', label: translate('concentrationIntense') },
            { value: 'elixir', label: translate('concentrationElixir') },
            { value: 'absolu', label: translate('concentrationAbsolu') },
            { value: 'other', label: translate('concentrationOther') }
        ];

        options.forEach(opt => {
            const option = document.createElement('option');
            option.value = opt.value;
            option.textContent = opt.label;
            option.selected = opt.value === currentValue;
            select.appendChild(option);
        });
        
        // Replace content with select
        cell.innerHTML = '';
        cell.appendChild(select);
        select.focus();

        // Save only when value actually changes (not on initial focus/open)
        let hasChanged = false;
        const saveEdit = () => {
            if (select.value !== currentValue || hasChanged) {
                perfume.concentration = select.value;
                this.saveToLocalStorage();
                this.renderInventory();
            } else {
                // Value didn't change, just re-render to restore the original display
                this.renderInventory();
            }
        };

        select.addEventListener('change', () => {
            hasChanged = true;
        });
        
        select.addEventListener('blur', saveEdit);
    }

    getConcentrationLabel(concentration) {
        const labels = {
            'edp': 'EDP',
            'edt': 'EDT',
            'parfum': 'Parfum',
            'edc': 'EDC',
            'edl': 'EDL',
            'intense': 'Intense',
            'elixir': 'Elixir',
            'absolu': 'Absolu',
            'other': 'Other'
        };
        return labels[concentration] || 'EDP';
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
        if (confirm('Are you sure you want to delete this item from inventory?')) {
            if (currentView === 'bottles') {
                this.perfumes = this.perfumes.filter(p => p.id !== id);
            } else {
                this.decants = this.decants.filter(p => p.id !== id);
            }
            this.saveToLocalStorage();
            
            // Update autocomplete lists after deletion
            this.knownPerfumes = this.getKnownPerfumes();
            this.allKnownPerfumeNames = this.getAllKnownPerfumeNames();
            
            this.renderInventory();
            this.updateStats();
            this.showToast('Item deleted successfully!');
        }
    }

    renderInventory(perfumesToRender = null) {
        if (!perfumesToRender) {
            perfumesToRender = this.getCurrentList();
        }
        
        const container = document.getElementById('inventoryTable');
        
        if (perfumesToRender.length === 0) {
            const itemType = currentView === 'bottles' ? 'bottles' : 'decants';
            container.innerHTML = `<div class="no-data">No ${itemType} in inventory. Add your first ${itemType.slice(0, -1)} above!</div>`;
            return;
        }

        const table = `
            <div class="inventory-table">
                <table>
                    <thead>
                        <tr>
                            <th>${translate('tableName')}</th>
                            <th>${translate('tableBrand')}</th>
                            <th>${translate('tableConcentration')}</th>
                            <th>${translate('tableBatchCode')}</th>
                            <th>${translate('tableProductionDate')}</th>
                            <th>${translate('tableQuantity')}</th>
                            <th>${translate('tableSize')}</th>
                            <th>${translate('tableStatus')}</th>
                            <th>${translate('tableFragranceNotes')}</th>
                            <th>${translate('tablePersonalNotes')}</th>
                            <th>${translate('tableActions')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${perfumesToRender.map(perfume => {
                            const status = perfume.status || 'owned';
                            return `
                            <tr class="${this.getStatusClass(status)}">
                                <td><strong>${perfume.name}</strong></td>
                                <td>${perfume.brand}</td>
                                <td class="editable-cell" onclick="inventory.editConcentration(${perfume.id}, this)">
                                    <span class="concentration-badge">${this.getConcentrationLabel(perfume.concentration)}</span>
                                </td>
                                <td>
                                    <div class="batch-info">
                                        <span class="batch-code">${perfume.batchCode || '<span style="color: #999; font-style: italic;">N/A</span>'}</span>
                                    </div>
                                </td>
                                <td>
                                    <span class="production-date">
                                        ${this.formatDate(perfume.productionDate)}
                                    </span>
                                </td>
                                <td class="editable-cell" onclick="inventory.editQuantity(${perfume.id}, this)">
                                    <span class="editable-value">${perfume.quantity > 0 ? perfume.quantity : '<span style="color: #999; font-style: italic;">-</span>'}</span>
                                </td>
                                <td class="editable-cell" onclick="inventory.editSize(${perfume.id}, this)">
                                    <span class="editable-value">${perfume.size > 0 ? perfume.size + ' ml' : '<span style="color: #999; font-style: italic;">-</span>'}</span>
                                </td>
                                <td>
                                    <span class="status-badge ${this.getStatusClass(status)}">
                                        ${this.getStatusLabel(status)}
                                    </span>
                                    <div class="status-actions">
                                        <select class="status-select" onchange="inventory.updateStatus(${perfume.id}, this.value)" value="${status}">
                                            <option value="owned" ${status === 'owned' ? 'selected' : ''}>${translate('statusOwned')}</option>
                                            <option value="want-to-get" ${status === 'want-to-get' ? 'selected' : ''}>${translate('statusWantToGet')}</option>
                                            <option value="want-to-try" ${status === 'want-to-try' ? 'selected' : ''}>${translate('statusWantToTry')}</option>
                                            <option value="for-sale" ${status === 'for-sale' ? 'selected' : ''}>${translate('statusForSale')}</option>
                                            <option value="sold" ${status === 'sold' ? 'selected' : ''}>${translate('statusSold')}</option>
                                        </select>
                                    </div>
                                </td>
                                <td class="fragrance-notes-cell">
                                    ${perfume.fragranceNotes ? `<span class="fragrance-notes">${perfume.fragranceNotes}</span>` : '<span style="color: #999;">-</span>'}
                                </td>
                                <td>${perfume.notes || '-'}</td>
                                <td>
                                    <button class="btn btn-delete" onclick="inventory.deletePerfume(${perfume.id})">
                                        ${translate('deleteButton')}
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
        const currentList = this.getCurrentList();
        const filtered = currentList.filter(perfume => {
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
        const currentList = this.getCurrentList();
        
        // Total items
        document.getElementById('totalItems').textContent = currentList.length;

        // Total brands
        const uniqueBrands = new Set(currentList.map(p => p.brand));
        document.getElementById('totalBrands').textContent = uniqueBrands.size;

        // Total quantity (exclude wishlist items: want-to-get and want-to-try)
        const totalQuantity = currentList
            .filter(p => {
                const status = p.status || 'owned';
                return status !== 'want-to-get' && status !== 'want-to-try';
            })
            .reduce((sum, p) => sum + p.quantity, 0);
        document.getElementById('totalQuantity').textContent = totalQuantity;

        // Status counts
        const statusCounts = currentList.reduce((acc, p) => {
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
        const batchCode = document.getElementById('batchCode').value.trim().toUpperCase();
        const brand = document.getElementById('brand').value.trim();
        
        if (!batchCode) {
            this.showToast('ℹ️ No batch code entered - production date will be marked as Unknown');
            return;
        }
        
        // Try to decode the batch code
        const decodedDate = this.decodeBatchCode(batchCode, brand);
        
        if (decodedDate) {
            // Auto-populate the production date field
            document.getElementById('productionDate').value = decodedDate;
            this.showToast(`✓ Decoded: ${this.formatDate(decodedDate)} - Please verify if needed`);
        } else {
            // Show modal with manual check options
            navigator.clipboard.writeText(batchCode).then(() => {
                this.showBatchCodeModal(batchCode, brand);
            }).catch(() => {
                this.showBatchCodeModal(batchCode, brand);
            });
        }
    }

    decodeBatchCode(code, brand) {
        // Remove spaces and convert to uppercase
        code = code.replace(/\s+/g, '').toUpperCase();
        
        // Try different decoding methods based on common formats
        
        // Format 1: 4-digit code (YYMM or variations)
        if (/^\d{4}$/.test(code)) {
            const year = parseInt(code.substring(0, 2));
            const month = parseInt(code.substring(2, 4));
            if (month >= 1 && month <= 12) {
                const fullYear = year >= 0 && year <= 30 ? 2000 + year : 1900 + year;
                return `${fullYear}-${String(month).padStart(2, '0')}`;
            }
        }
        
        // Format 2: 5-digit code (YYDDD - year and day of year)
        if (/^\d{5}$/.test(code)) {
            const year = parseInt(code.substring(0, 2));
            const dayOfYear = parseInt(code.substring(2, 5));
            if (dayOfYear >= 1 && dayOfYear <= 366) {
                const fullYear = year >= 0 && year <= 30 ? 2000 + year : 1900 + year;
                const date = this.getDayOfYear(fullYear, dayOfYear);
                return date;
            }
        }
        
        // Format 3: 6-digit code (YYMMDD or DDMMYY)
        if (/^\d{6}$/.test(code)) {
            // Try YYMMDD
            let year = parseInt(code.substring(0, 2));
            let month = parseInt(code.substring(2, 4));
            let day = parseInt(code.substring(4, 6));
            
            if (month >= 1 && month <= 12 && day >= 1 && day <= 31) {
                const fullYear = year >= 0 && year <= 30 ? 2000 + year : 1900 + year;
                return `${fullYear}-${String(month).padStart(2, '0')}`;
            }
            
            // Try DDMMYY
            day = parseInt(code.substring(0, 2));
            month = parseInt(code.substring(2, 4));
            year = parseInt(code.substring(4, 6));
            
            if (month >= 1 && month <= 12 && day >= 1 && day <= 31) {
                const fullYear = year >= 0 && year <= 30 ? 2000 + year : 1900 + year;
                return `${fullYear}-${String(month).padStart(2, '0')}`;
            }
        }
        
        // Format 4: Letter + numbers (common in Chanel, e.g., "4218" or with letter prefix)
        if (/^[A-Z]?\d{4}$/.test(code)) {
            const numPart = code.match(/\d{4}$/)[0];
            const year = parseInt(numPart.substring(0, 2));
            const month = parseInt(numPart.substring(2, 4));
            if (month >= 1 && month <= 12) {
                const fullYear = year >= 0 && year <= 30 ? 2000 + year : 1900 + year;
                return `${fullYear}-${String(month).padStart(2, '0')}`;
            }
        }
        
        // Format 5: 3-digit code (YMM - single digit year + 2 digit month)
        if (/^\d{3}$/.test(code)) {
            const year = parseInt(code.substring(0, 1));
            const month = parseInt(code.substring(1, 3));
            if (month >= 1 && month <= 12) {
                const fullYear = 2020 + year; // Assume recent years
                return `${fullYear}-${String(month).padStart(2, '0')}`;
            }
        }
        
        // Format 6: Letter code followed by numbers (e.g., "38U600" - used by some brands)
        if (/^\d{2}[A-Z]\d{3}$/.test(code)) {
            const year = parseInt(code.substring(0, 2));
            const letterCode = code.charAt(2);
            // Letter often represents month: A=Jan, B=Feb, etc.
            const month = letterCode.charCodeAt(0) - 64; // A=1, B=2, etc.
            if (month >= 1 && month <= 12) {
                const fullYear = year >= 0 && year <= 30 ? 2000 + year : 1900 + year;
                return `${fullYear}-${String(month).padStart(2, '0')}`;
            }
        }
        
        // Format 7: Complex cosmetic codes (e.g., "ABY11ET" = 2024-01)
        // Pattern: Letter(year) + Letter(plant) + Letter(month) + Number(day/batch) + Letters(identifiers)
        if (/^[A-Z]{2,3}\d{2}[A-Z]{0,2}$/.test(code)) {
            const firstLetter = code.charAt(0);
            
            // First letter often represents year: A=2024, B=2025, C=2026, etc.
            // Or reverse: A=2020, B=2021, etc.
            const yearOffset = firstLetter.charCodeAt(0) - 65; // A=0, B=1, etc.
            
            // Try modern interpretation (A=2024, which is common in cosmetics)
            let possibleYear = 2024 + yearOffset;
            
            // If year is too far in future, try alternate base years
            if (possibleYear > 2030) {
                possibleYear = 2020 + yearOffset;
            }
            if (possibleYear > 2030 || possibleYear < 2020) {
                possibleYear = 2014 + yearOffset;
            }
            
            // Third letter might be month code
            const thirdLetter = code.charAt(2);
            let month = null;
            
            // Month coding: A=Jan(1), B=Feb(2), ..., L=Dec(12) OR
            // Month coding: A=Oct(10), B=Nov(11), C=Dec(12), D=Jan(1), etc.
            // Check if third character is a letter
            if (/[A-Z]/.test(thirdLetter)) {
                // Standard: A=1, B=2, C=3... L=12
                const monthFromLetter = thirdLetter.charCodeAt(0) - 64;
                if (monthFromLetter >= 1 && monthFromLetter <= 12) {
                    month = monthFromLetter;
                }
                
                // Alternative: Y could be special month code
                // In some systems: Y=1 (January), Z=2, A=3, etc.
                if (thirdLetter === 'Y') {
                    month = 1; // January
                } else if (thirdLetter === 'Z') {
                    month = 2; // February
                }
            }
            
            if (month && possibleYear >= 2020 && possibleYear <= 2030) {
                return `${possibleYear}-${String(month).padStart(2, '0')}`;
            }
        }
        
        // Format 8: Simple letter + 2-3 digits (e.g., "N24", "Y11")
        if (/^[A-Z]\d{2,3}$/.test(code)) {
            const letter = code.charAt(0);
            const numbers = code.substring(1);
            
            // Letter might represent year: N=2024, Y=2025, etc.
            // Or production line + YM format
            if (numbers.length === 2) {
                // Could be month-year reversed
                const month = parseInt(numbers);
                if (month >= 1 && month <= 12) {
                    // Assume current decade
                    const currentYear = new Date().getFullYear();
                    const decade = Math.floor(currentYear / 10) * 10;
                    return `${decade + parseInt(letter.charCodeAt(0) - 65) % 10}-${String(month).padStart(2, '0')}`;
                }
            }
        }
        
        return null; // Could not decode
    }

    getDayOfYear(year, dayOfYear) {
        const date = new Date(year, 0);
        date.setDate(dayOfYear);
        const month = date.getMonth() + 1;
        return `${year}-${String(month).padStart(2, '0')}`;
    }

    showBatchCodeModal(batchCode, brand) {
        // Create modal overlay
        const modal = document.createElement('div');
        modal.className = 'batch-modal-overlay';
        
        // Generate CosmeticCheck.app brand URL if brand is provided
        const brandSlug = brand ? this.getBrandSlug(brand) : null;
        const cosmeticCheckUrl = brandSlug 
            ? `https://www.cosmeticcheck.app/brands/${brandSlug}` 
            : 'https://www.cosmeticcheck.app/';
        
        modal.innerHTML = `
            <div class="batch-modal">
                <h3>Could Not Auto-Decode: ${batchCode}</h3>
                <p class="batch-brand">${brand || 'Brand not specified'}</p>
                <div class="batch-code-display">
                    <code>${batchCode}</code>
                    <button class="btn-copy" onclick="navigator.clipboard.writeText('${batchCode}'); this.textContent='Copied!'">Copy</button>
                </div>
                <p class="batch-instruction" style="color: #ff9800; font-weight: 600;">⚠️ This batch code format is not recognized by our decoder.</p>
                <p class="batch-instruction">The code has been copied to your clipboard. Visit one of these sites to decode it:</p>
                <div class="batch-links">
                    <a href="${cosmeticCheckUrl}" target="_blank" class="batch-link" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
                        <strong>🎯 CosmeticCheck.app ${brandSlug ? '(Brand-Specific)' : ''}</strong>
                        <small style="color: rgba(255,255,255,0.9);">Enter batch code on the page - 791 brands supported</small>
                    </a>
                    <a href="https://www.checkcosmetic.net/" target="_blank" class="batch-link">
                        <strong>CheckCosmetic.net</strong>
                        <small>Clean interface, no popups - Alternative option</small>
                    </a>
                    <a href="https://www.checkfresh.com/" target="_blank" class="batch-link">
                        <strong>CheckFresh.com</strong>
                        <small>Popular batch checker - May have ads</small>
                    </a>
                </div>
                <p style="font-size: 0.9em; color: #666; text-align: center; margin-top: 15px;">
                    💡 Tip: Paste the code (Ctrl+V) and enter it in the checker to get the production date
                </p>
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

    getBrandSlug(brand) {
        // Convert brand name to URL slug for cosmeticcheck.app
        const brandMap = {
            'Thierry Mugler': 'mugler',
            'Mugler': 'mugler',
            'Chanel': 'chanel',
            'Dior': 'christian-dior',
            'Christian Dior': 'christian-dior',
            'Yves Saint Laurent': 'ysl',
            'YSL': 'ysl',
            'Tom Ford': 'tom-ford-beauty',
            'Creed': 'creed',
            'Amouage': 'amouage',
            'Xerjoff': 'xerjoff',
            'Roja Dove': 'roja-parfums',
            'Roja': 'roja-parfums',
            'Maison Francis Kurkdjian': 'maison-francis-kurkdjian',
            'MFK': 'maison-francis-kurkdjian',
            'Kilian': 'kilian-paris',
            'By Kilian': 'kilian-paris',
            'Initio': 'initio-parfums-prives',
            'Parfums de Marly': 'parfums-de-marly',
            'PDM': 'parfums-de-marly',
            'Mancera': 'mancera',
            'Montale': 'montale',
            'Nishane': 'nishane',
            'Byredo': 'byredo',
            'Le Labo': 'le-labo',
            'Diptyque': 'diptyque',
            'Jo Malone': 'jo-malone-london',
            'Acqua di Parma': 'acqua-di-parma',
            'Hermès': 'hermes',
            'Hermes': 'hermes',
            'Guerlain': 'guerlain',
            'Givenchy': 'givenchy',
            'Prada': 'prada',
            'Versace': 'versace',
            'Giorgio Armani': 'giorgio-armani-beauty',
            'Armani': 'giorgio-armani-beauty',
            'Dolce & Gabbana': 'dolce-gabbana',
            'D&G': 'dolce-gabbana',
            'Burberry': 'burberry',
            'Calvin Klein': 'calvin-klein',
            'Viktor & Rolf': 'viktor-rolf',
            'Paco Rabanne': 'rabanne',
            'Rabanne': 'rabanne',
            'Jean Paul Gaultier': 'jean-paul-gaultier',
            'JPG': 'jean-paul-gaultier',
            'Narciso Rodriguez': 'narciso-rodriguez',
            'Carolina Herrera': 'carolina-herrera',
            'Lancôme': 'lancome',
            'Lancome': 'lancome',
            'Estée Lauder': 'estee-lauder',
            'Estee Lauder': 'estee-lauder',
            'Clinique': 'clinique',
            'Marc Jacobs': 'marc-jacobs',
            'Gucci': 'gucci',
            'Bvlgari': 'bvlgari',
            'Bulgari': 'bvlgari',
            'Cartier': 'cartier',
            'Montblanc': 'montblanc',
            'Hugo Boss': 'hugo-boss',
            'Issey Miyake': 'issey-miyake',
            'Kenzo': 'kenzo',
            'Valentino': 'valentino'
        };
        
        return brandMap[brand] || null;
    }

    formatDate(dateString) {
        if (!dateString || dateString === '') {
            return '<span style="color: #999; font-style: italic;">Unknown</span>';
        }
        // Handle YYYY-MM format
        if (/^\d{4}-\d{2}(-\d{2})?$/.test(dateString)) {
            const [year, month] = dateString.split('-');
            const date = new Date(year, month - 1);
            const options = { year: 'numeric', month: 'long' };
            return date.toLocaleDateString('en-US', options);
        }
        // Fallback for full dates
        const options = { year: 'numeric', month: 'long' };
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

    loadFromLocalStorage(type) {
        const key = type === 'decants' ? 'perfumeDecants' : 'perfumeInventory';
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : [];
    }

    saveToLocalStorage() {
        localStorage.setItem('perfumeInventory', JSON.stringify(this.perfumes));
        localStorage.setItem('perfumeDecants', JSON.stringify(this.decants));
    }

    exportToCSV() {
        const currentList = this.getCurrentList();
        if (currentList.length === 0) {
            alert('No data to export!');
            return;
        }

        const headers = ['Perfume Name', 'Brand', 'Concentration', 'Batch Code', 'Production Date', 'Quantity', 'Size (ml)', 'Status', 'Fragrance Notes', 'Personal Notes', 'Added Date'];
        const csvContent = [
            headers.join(','),
            ...currentList.map(p => [
                `"${p.name}"`,
                `"${p.brand}"`,
                `"${this.getConcentrationLabel(p.concentration || 'edp')}"`,
                `"${p.batchCode || ''}"`,
                p.productionDate || '',
                p.quantity,
                p.size,
                `"${this.getStatusLabel(p.status || 'owned')}"`,
                `"${p.fragranceNotes || ''}"`,
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
        if (this.perfumes.length === 0 && this.decants.length === 0) {
            alert('No data to backup!');
            return;
        }

        const backup = {
            version: '2.0',
            exportDate: new Date().toISOString(),
            perfumes: this.perfumes,
            decants: this.decants
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

                // Handle both old (v1.0) and new (v2.0) backup formats
                const decants = backup.decants && Array.isArray(backup.decants) ? backup.decants : [];
                const totalItems = backup.perfumes.length + decants.length;

                if (confirm(`This will restore ${backup.perfumes.length} bottle(s) and ${decants.length} decant(s) from ${new Date(backup.exportDate).toLocaleDateString()}. Current inventory will be replaced. Continue?`)) {
                    this.perfumes = backup.perfumes;
                    this.decants = decants;
                    this.saveToLocalStorage();
                    
                    // Update autocomplete lists after restore
                    this.knownPerfumes = this.getKnownPerfumes();
                    this.allKnownPerfumeNames = this.getAllKnownPerfumeNames();
                    
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
