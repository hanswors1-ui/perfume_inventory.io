// Perfume Inventory Management System

// Translation System
let currentLanguage = localStorage.getItem('preferredLanguage') || 'en';
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
        deleteButton: "Delete",
        editButton: "Edit",
        undo: "Undo",
        bulkDeleteConfirm: "Delete ${count} items?",
        bulkDeleteSuccess: "${count} items deleted",
        deleteItemConfirm: "Delete this item?",
        bulkDelete: "Bulk Delete",
        bulkStatus: "Change Status",
        allBrands: "All Brands",
        allConcentrations: "All Concentrations",
        apply: "Apply Filters",
        clear: "Clear Filters",
        sortBy: "Sort by:",
        sortByName: "Name (A-Z)",
        sortByBrand: "Brand (A-Z)",
        sortByDateAdded: "Date Added (Newest)",
        sortByProductionDate: "Production Date (Newest)",
        sortByStatus: "Status",
        sortByConcentration: "Concentration",
        sortBySize: "Size (Large to Small)",
        sort: "↑",
        editPerfume: "Edit Perfume",
        editSize: "Edit Size",
        editQuantity: "Edit Quantity",
        editStatus: "Edit Status",
        editNotes: "Edit Notes"
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
        deleteButton: "Usuń",
        editButton: "Edytuj",
        undo: "Cofnij",
        bulkDeleteConfirm: "Usunąć ${count} pozycji?",
        bulkDeleteSuccess: "Usunięto ${count} pozycji",
        deleteItemConfirm: "Usunąć tę pozycję?",
        bulkDelete: "Usuń Masowo",
        bulkStatus: "Zmień Status",
        allBrands: "Wszystkie Marki",
        allConcentrations: "Wszystkie Koncentracje",
        apply: "Zastosuj Filtry",
        clear: "Wyczyść Filtry",
        sortBy: "Sortuj według:",
        sortByName: "Nazwa (A-Z)",
        sortByBrand: "Marka (A-Z)",
        sortByDateAdded: "Data Dodania (Najnowsze)",
        sortByProductionDate: "Data Produkcji (Najnowsze)",
        sortByStatus: "Status",
        sortByConcentration: "Koncentracja",
        sortBySize: "Rozmiar (Duże do Małych)",
        sort: "↑",
        editPerfume: "Edytuj Perfumy",
        editSize: "Edytuj Rozmiar",
        editQuantity: "Edytuj Ilość",
        editStatus: "Edytuj Status",
        editNotes: "Edytuj Notatki"
    }
// Make translations available globally for extensions
window['translations'] = translations;
window['currentLanguage'] = currentLanguage;

// Ensure currentLanguage is valid
if (!translations[currentLanguage]) {
    currentLanguage = 'en';
    localStorage.setItem('preferredLanguage', 'en');
}

function translate(key) {
    return translations[currentLanguage][key] || translations.en[key] || key;
}

window['translate'] = translate;

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
        // Clear old incorrect inventory data if it exists (from when API catalog was being saved as inventory)
        const savedInventory = localStorage.getItem('perfumeInventory');
        if (savedInventory) {
            try {
                const data = JSON.parse(savedInventory);
                // If the saved inventory has 999+ items, it's likely the old catalog - clear it
                if (Array.isArray(data) && data.length > 500) {
                    console.log('Detected old catalog data in inventory, clearing...');
                    localStorage.removeItem('perfumeInventory');
                }
            } catch (e) {
                // Ignore parse errors
            }
        }
        
        // User's inventory - loaded from localStorage
        this.perfumes = this.loadFromLocalStorage('bottles') || [];
        this.decants = this.loadFromLocalStorage('decants') || [];
        
        // Catalog from API - used for autocomplete suggestions only
        this.perfumeCatalog = [];
        this.knownPerfumes = {};
        this.allKnownPerfumeNames = [];
        
        // Sort state
        this.sortBy = localStorage.getItem('sortBy') || 'name';
        this.sortReversed = localStorage.getItem('sortReversed') === 'true';
        
        // Filter state
        this.filterStatus = localStorage.getItem('filterStatus') || null;
        
        this.showAll = false;
        
        // Cache for sorted lists
        this.sortedCache = new Map();
        
        // Display limit for virtual scrolling
        this.displayLimit = 50;
        
        // Advanced filters
        this.advancedFilters = {
            brand: '',
            concentration: '',
            dateFrom: '',
            dateTo: ''
        };
        
        this.init();
    }

    debounce(func, delay) {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), delay);
        };
    }

    populateFilterBrands() {
        const brands = [...new Set(this.getCurrentList().map(p => p.brand))].sort();
        const select = document.getElementById('filterBrand');
        select.innerHTML = `<option value="">${translate('allBrands')}</option>` + brands.map(b => `<option value="${b}">${b}</option>`).join('');
    }

    async loadFromAPI() {
        try {
            document.getElementById('loading').style.display = 'flex';
            console.log('Loading perfume catalog from API...');
            const response = await fetch('Perfumes_api/perfume.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log(`Loaded ${data.length} perfumes from API catalog`);
            this.perfumeCatalog = data;
            this.knownPerfumes = this.getKnownPerfumes();
            this.allKnownPerfumeNames = this.getAllKnownPerfumeNames();
            this.setupAutocomplete();
            console.log('Perfume catalog loaded successfully');
            document.getElementById('loading').style.display = 'none';
            return data;
        } catch (error) {
            console.error('Failed to load perfume catalog from API:', error);
            document.getElementById('loading').style.display = 'none';
            this.perfumeCatalog = [];
            return [];
        }
    }

    init() {
        this.setupEventListeners();
        this.setupLanguageSwitcher();
        this.setupViewSwitcher();
        this.setupSortControls();
        this.setupStatCardFilters();
        this.setupDarkMode();
        this.setupMobileUI();
        this.setupAutocomplete();
        updatePageLanguage();
        
        // Load perfume catalog in background for autocomplete
        this.loadFromAPI();
        
        // Register service worker for offline support
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js')
                .then((registration) => {
                    console.log('Service Worker registered with scope:', registration.scope);
                })
                .catch((error) => {
                    console.log('Service Worker registration failed:', error);
                });
        }
        
        // Switch to current view without API data initially
        this.switchView(currentView);
    }

    getCurrentList() {
        return this.showAll ? [...this.perfumes, ...this.decants] : (currentView === 'bottles' ? this.perfumes : this.decants);
    }

    getKnownPerfumes() {
        // Get perfume names from the API catalog grouped by brand (for autocomplete suggestions)
        const perfumesByBrand = {};
        
        // Use the catalog for autocomplete suggestions, not the user's inventory
        const catalogToProcess = Array.isArray(this.perfumeCatalog) ? this.perfumeCatalog : [];
        
        catalogToProcess.forEach(p => {
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
        if (!Array.isArray(this.perfumeCatalog)) {
            return [];
        }
        return this.perfumeCatalog.map(perfume => perfume.name);
    }

    getKnownBrands() {
        if (!Array.isArray(this.perfumeCatalog)) {
            return [];
        }
        const brands = new Set();
        this.perfumeCatalog.forEach(perfume => {
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
            
            const performAutocomplete = () => {
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
                        // When brand is selected, trigger input on perfume field to show filtered suggestions
                        const perfumeInput = document.getElementById('perfumeName');
                        if (perfumeInput) {
                            perfumeInput.focus();
                            // Trigger input event to show perfume suggestions for this brand
                            perfumeInput.dispatchEvent(new Event('input', { bubbles: true }));
                        }
                    });
                    
                    list.appendChild(div);
                });
            };
            
            if (!this.perfumeCatalog.length) {
                this.loadFromAPI().then(() => {
                    performAutocomplete();
                });
            } else {
                performAutocomplete();
            }
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
            
            const performAutocomplete = () => {
                // Get current brand and fresh perfume lists from inventory
                const brand = document.getElementById('brand').value;
                const freshKnownPerfumes = this.getKnownPerfumes();
                const freshAllPerfumes = this.getAllKnownPerfumeNames();
                const perfumesForBrand = freshKnownPerfumes[brand] || [];
                
                // If a brand is selected, only show perfumes from that brand
                // Otherwise show all perfumes
                const allSuggestions = brand && perfumesForBrand.length > 0 
                    ? perfumesForBrand 
                    : [...new Set([...perfumesForBrand, ...freshAllPerfumes])];
                
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
                        // When perfume is selected, auto-populate the brand if not already set
                        const brandInput = document.getElementById('brand');
                        if (brandInput && !brandInput.value) {
                            // Find the brand for this perfume from the catalog
                            const perfumeEntry = this.perfumeCatalog.find(p => p.name === item);
                            if (perfumeEntry && perfumeEntry.brand) {
                                brandInput.value = perfumeEntry.brand;
                            }
                        }
                    });
                    
                    list.appendChild(div);
                });
            };
            
            if (!this.perfumeCatalog.length) {
                this.loadFromAPI().then(() => {
                    performAutocomplete();
                });
            } else {
                performAutocomplete();
            }
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
        const perfumeForm = document.getElementById('perfumeForm');
        if (perfumeForm) {
            perfumeForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.addPerfume();
            });
        }

        // Search functionality with debouncing
        this.debouncedSearch = this.debounce(this.searchInventory, 300);
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.debouncedSearch(e.target.value);
            });
        }

        // Export functionality
        const exportBtn = document.getElementById('exportBtn');
        if (exportBtn) {
            exportBtn.addEventListener('click', () => {
                this.exportToCSV();
            });
        }

        // Backup functionality
        const backupBtn = document.getElementById('backupBtn');
        if (backupBtn) {
            backupBtn.addEventListener('click', () => {
                this.backupInventory();
            });
        }

        // Restore functionality
        const restoreBtn = document.getElementById('restoreBtn');
        if (restoreBtn) {
            restoreBtn.addEventListener('click', () => {
                document.getElementById('restoreFile').click();
            });
        }
        const restoreFile = document.getElementById('restoreFile');
        if (restoreFile) {
            restoreFile.addEventListener('change', (e) => {
                this.restoreInventory(e.target.files[0]);
            });
        }

        // Check batch code on CheckFresh
        const checkBatchBtn = document.getElementById('checkBatchBtn');
        if (checkBatchBtn) {
            checkBatchBtn.addEventListener('click', () => {
                this.checkBatchCode();
            });
        }

        // Close autocomplete when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.matches('#brand') && !e.target.matches('#perfumeName')) {
                this.closeAllLists();
            }
        });

        // Handle status change to make quantity/size optional for wishlist items
        const status = document.getElementById('status');
        if (status) {
            status.addEventListener('change', (e) => {
                this.updateFormFieldRequirements(e.target.value);
            });
        }

        // Format production date input for YYYY-MM
        const productionDate = document.getElementById('productionDate');
        if (productionDate) {
            productionDate.addEventListener('input', (e) => {
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

        // Advanced filters
        const filterToggle = document.getElementById('filterToggle');
        if (filterToggle) {
            filterToggle.addEventListener('click', () => {
                const filters = document.getElementById('advancedFilters');
                filters.classList.toggle('collapsed');
            });
        }
        const applyFilters = document.getElementById('applyFilters');
        if (applyFilters) {
            applyFilters.addEventListener('click', () => {
                this.advancedFilters.brand = document.getElementById('filterBrand').value;
                this.advancedFilters.concentration = document.getElementById('filterConcentration').value;
                this.advancedFilters.dateFrom = document.getElementById('filterDateFrom').value;
                this.advancedFilters.dateTo = document.getElementById('filterDateTo').value;
                this.renderInventory();
            });
        }
        const clearFilters = document.getElementById('clearFilters');
        if (clearFilters) {
            clearFilters.addEventListener('click', () => {
                this.advancedFilters = { brand: '', concentration: '', dateFrom: '', dateTo: '' };
                document.getElementById('filterBrand').value = '';
                document.getElementById('filterConcentration').value = '';
                document.getElementById('filterDateFrom').value = '';
                document.getElementById('filterDateTo').value = '';
                this.renderInventory();
            });
        }

        // Bulk actions
        document.addEventListener('change', (e) => {
            if (e.target.classList.contains('item-checkbox')) {
                this.updateBulkActions();
            }
        });
        const selectAll = document.getElementById('selectAll');
        if (selectAll) {
            selectAll.addEventListener('click', () => {
                const all = document.querySelectorAll('.item-checkbox');
                const checked = document.querySelectorAll('.item-checkbox:checked');
                const select = checked.length === all.length;
                all.forEach(cb => cb.checked = !select);
                this.updateBulkActions();
            });
        }
        const bulkDelete = document.getElementById('bulkDelete');
        if (bulkDelete) {
            bulkDelete.addEventListener('click', () => {
                const ids = Array.from(document.querySelectorAll('.item-checkbox:checked')).map(cb => parseInt(cb.dataset.id));
                if (ids.length && confirm(translate('bulkDeleteConfirm').replace('${count}', ids.length))) {
                    ids.forEach(id => this.deletePerfume(id, false));
                    this.renderInventory();
                    this.updateStats();
                    this.showToast(translate('bulkDeleteSuccess').replace('${count}', ids.length));
                }
            });
        }
        const bulkStatus = document.getElementById('bulkStatus');
        if (bulkStatus) {
            bulkStatus.addEventListener('click', () => {
                const ids = Array.from(document.querySelectorAll('.item-checkbox:checked')).map(cb => parseInt(cb.dataset.id));
                if (ids.length) {
                    const newStatus = prompt('Enter new status (owned, want-to-get, want-to-try, for-sale, sold):');
                    if (newStatus && ['owned', 'want-to-get', 'want-to-try', 'for-sale', 'sold'].includes(newStatus)) {
                        ids.forEach(id => {
                            const list = this.getCurrentList();
                            const perfume = list.find(p => p.id === id);
                            if (perfume) {
                                perfume.status = newStatus;
                            }
                        });
                        this.saveToLocalStorage();
                        this.renderInventory();
                        this.updateStats();
                        this.showToast(`Status updated for ${ids.length} items`);
                    }
                }
            });
        }

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 'f') {
                e.preventDefault();
                document.getElementById('searchInput').focus();
            }
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

    setupSortControls() {
        const sortBySelect = document.getElementById('sortBy');
        const sortOrderBtn = document.getElementById('sortOrder');

        if (sortBySelect) {
            sortBySelect.addEventListener('change', (e) => {
                this.sortBy = e.target.value;
                localStorage.setItem('sortBy', this.sortBy);
                this.displayLimit = 50;
                this.renderInventory();
            });
            // Set current value from this.sortBy
            sortBySelect.value = this.sortBy;
        }

        if (sortOrderBtn) {
            sortOrderBtn.addEventListener('click', () => {
                this.sortReversed = !this.sortReversed;
                localStorage.setItem('sortReversed', this.sortReversed);
                this.displayLimit = 50;
                // Update button visual state
                if (this.sortReversed) {
                    sortOrderBtn.classList.add('reversed');
                } else {
                    sortOrderBtn.classList.remove('reversed');
                }
                this.renderInventory();
            });
            // Set initial button state
            if (this.sortReversed) {
                sortOrderBtn.classList.add('reversed');
            }
        }
    }

    setupStatCardFilters() {
        const statCards = document.querySelectorAll('.stat-card');
        statCards.forEach((card, index) => {
            // Skip the middle 2 cards (totalBrands, totalQuantity)
            if (index > 0 && index < 3) return;

            if (index === 0) {
                // Total Items - show all perfumes
                card.style.cursor = 'pointer';
                card.setAttribute('role', 'button');
                card.setAttribute('tabindex', '0');
                const handler = () => {
                    this.showAll = true;
                    this.filterStatus = null;
                    localStorage.removeItem('filterStatus');
                    this.updateStatCardVisualState();
                    this.renderInventory();
                    this.updateStats();
                };
                card.addEventListener('click', handler);
                card.addEventListener('touchstart', handler);
                return;
            }

            const statusMap = {
                3: 'owned',
                4: 'want-to-get',
                5: 'want-to-try',
                6: 'for-sale',
                7: 'sold'
            };

            const status = statusMap[index];
            if (!status) return;

            card.style.cursor = 'pointer';
            card.setAttribute('role', 'button');
            card.setAttribute('tabindex', '0');
            const handler = () => {
                // Toggle filter: if clicking the same filter, clear it
                if (this.filterStatus === status) {
                    this.filterStatus = null;
                } else {
                    this.filterStatus = status;
                }

                this.showAll = false;

                // Save to localStorage
                if (this.filterStatus) {
                    localStorage.setItem('filterStatus', this.filterStatus);
                } else {
                    localStorage.removeItem('filterStatus');
                }

                // Update visual state of all cards
                this.updateStatCardVisualState();
                
                // Re-render inventory
                this.renderInventory();
            };
            card.addEventListener('click', handler);
            card.addEventListener('touchstart', handler);
        });

        // Set initial visual state
        this.updateStatCardVisualState();
    }

    updateStatCardVisualState() {
        const statCards = document.querySelectorAll('.stat-card');
        const statusMap = {
            3: 'owned',
            4: 'want-to-get',
            5: 'want-to-try',
            6: 'for-sale',
            7: 'sold'
        };

        statCards.forEach((card, index) => {
            if (index === 0) {
                if (this.showAll) {
                    card.classList.add('active-filter');
                } else {
                    card.classList.remove('active-filter');
                }
                return;
            }
            
            const status = statusMap[index];
            if (this.filterStatus === status) {
                card.classList.add('active-filter');
            } else {
                card.classList.remove('active-filter');
            }
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
        
        this.showAll = false;
        this.displayLimit = 50;
        
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

    setupDarkMode() {
        const darkModeToggle = document.getElementById('darkModeToggle');
        console.log('Dark mode button found:', darkModeToggle);
        
        // Load dark mode preference from localStorage
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        console.log('Dark mode enabled from storage:', isDarkMode);
        
        // Apply dark mode on page load if enabled
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        }
        
        // Add click listener to toggle button
        if (darkModeToggle) {
            const toggleHandler = () => {
                console.log('Dark mode toggle clicked!');
                const isDark = document.body.classList.contains('dark-mode');
                console.log('Current dark mode state:', isDark);
                
                document.body.classList.toggle('dark-mode');
                const isDarkNow = document.body.classList.contains('dark-mode');
                console.log('New dark mode state:', isDarkNow);
                
                localStorage.setItem('darkMode', isDarkNow);
            };
            
            darkModeToggle.addEventListener('click', toggleHandler);
            darkModeToggle.style.cursor = 'pointer';
            console.log('Dark mode event listener attached');
        } else {
            console.warn('Dark mode toggle button not found!');
        }
    }

    setupMobileUI() {
        const fabButton = document.getElementById('fabButton');
        const bottomSheet = document.getElementById('bottomSheet');
        const bottomSheetOverlay = document.getElementById('bottomSheetOverlay');
        const bottomSheetClose = document.getElementById('bottomSheetClose');
        

        // FAB click handler - scroll to top and focus form
        if (fabButton) {
            fabButton.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                document.getElementById('perfumeName').focus();
            });
        }

        // Bottom sheet close handlers
        if (bottomSheetClose) {
            bottomSheetClose.addEventListener('click', () => {
                this.closeBottomSheet();
            });
        }

        if (bottomSheetOverlay) {
            bottomSheetOverlay.addEventListener('click', () => {
                this.closeBottomSheet();
            });
        }

        // Swipe detection for status changes
        this.setupSwipeGestures();
    }

    setupSwipeGestures() {
        let touchStartX = 0;
        let touchEndX = 0;
        const swipeThreshold = 50; // pixels

        document.addEventListener('touchstart', (e) => {
            const card = e.target.closest('.perfume-card');
            if (card) {
                touchStartX = e.changedTouches[0].screenX;
            }
        }, false);

        document.addEventListener('touchend', (e) => {
            const card = e.target.closest('.perfume-card');
            if (card) {
                touchEndX = e.changedTouches[0].screenX;
                this.handleSwipe(card, touchStartX, touchEndX, swipeThreshold);
            }
        }, false);
    }

    handleSwipe(card, startX, endX, threshold) {
        const difference = startX - endX;
        const perfumeId = parseInt(card.dataset.perfumeId);

        // Swipe left - change status forward or delete if long
        if (difference > threshold) {
            if (difference > threshold * 2) {
                // Long swipe left - delete
                if (confirm(translate('deleteItemConfirm'))) {
                    this.deletePerfume(perfumeId);
                }
            } else {
                // Short swipe left - change status forward
                this.cycleStatus(perfumeId, 'forward');
            }
        }
        // Swipe right - change status backward
        else if (difference < -threshold) {
            this.cycleStatus(perfumeId, 'backward');
        }
    }

    cycleStatus(perfumeId, direction) {
        const statuses = ['owned', 'want-to-get', 'want-to-try', 'for-sale', 'sold'];
        const list = currentView === 'bottles' ? this.perfumes : this.decants;
        const perfume = list.find(p => p.id === perfumeId);

        if (perfume) {
            const currentIndex = statuses.indexOf(perfume.status || 'owned');
            let newIndex;

            if (direction === 'forward') {
                newIndex = (currentIndex + 1) % statuses.length;
            } else {
                newIndex = (currentIndex - 1 + statuses.length) % statuses.length;
            }

            perfume.status = statuses[newIndex];
            this.saveToLocalStorage();
            this.renderInventory();
            this.updateStats();
            this.showToast(`Status changed to ${this.getStatusLabel(perfume.status)}`);
        }
    }

    openBottomSheet(perfume = null) {
        const bottomSheet = document.getElementById('bottomSheet');
        const bottomSheetOverlay = document.getElementById('bottomSheetOverlay');

        if (bottomSheet && bottomSheetOverlay) {
            bottomSheet.classList.add('active');
            bottomSheetOverlay.classList.add('active');
            bottomSheet.focus();
        }
    }

    closeBottomSheet() {
        const bottomSheet = document.getElementById('bottomSheet');
        const bottomSheetOverlay = document.getElementById('bottomSheetOverlay');

        if (bottomSheet && bottomSheetOverlay) {
            bottomSheet.classList.remove('active');
            bottomSheetOverlay.classList.remove('active');
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

    deletePerfume(id, showToast = true) {
        const currentList = this.getCurrentList();
        const deletedItem = currentList.find(p => p.id === id);
        if (!deletedItem) return;

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
        if (showToast) {
            this.showToast('Item deleted successfully!', () => {
                // Undo
                if (currentView === 'bottles') {
                    this.perfumes.push(deletedItem);
                } else {
                    this.decants.push(deletedItem);
                }
                this.saveToLocalStorage();
                this.renderInventory();
                this.updateStats();
            });
        }
    }

    editPerfume(id) {
        const currentList = this.getCurrentList();
        const perfume = currentList.find(p => p.id === id);
        if (perfume) {
            this.openBottomSheet(perfume);
        }

    }

    sortPerfumes(perfumesArray) {
        if (!perfumesArray || perfumesArray.length === 0) {
            return perfumesArray;
        }

        const sortField = this.sortBy || 'name';
        const isReversed = this.sortReversed || false;
        const key = sortField + '-' + isReversed + '-' + perfumesArray.length + '-' + perfumesArray.map(p => p.id).sort().join(',');

        if (this.sortedCache.has(key)) {
            return this.sortedCache.get(key);
        }

        const sortedArray = [...perfumesArray]; // Create a copy to avoid mutations

        sortedArray.sort((a, b) => {
            let compareA, compareB;

            switch (sortField) {
                case 'name':
                    compareA = (a.name || '').toLowerCase();
                    compareB = (b.name || '').toLowerCase();
                    break;
                case 'brand':
                    compareA = (a.brand || '').toLowerCase();
                    compareB = (b.brand || '').toLowerCase();
                    break;
                case 'dateAdded':
                    compareA = a.dateAdded ? new Date(a.dateAdded).getTime() : 0;
                    compareB = b.dateAdded ? new Date(b.dateAdded).getTime() : 0;
                    break;
                case 'productionDate':
                    compareA = a.productionDate ? new Date(a.productionDate).getTime() : 0;
                    compareB = b.productionDate ? new Date(b.productionDate).getTime() : 0;
                    break;
                case 'status':
                    compareA = (a.status || 'owned').toLowerCase();
                    compareB = (b.status || 'owned').toLowerCase();
                    break;
                case 'concentration':
                    compareA = (a.concentration || 'edp').toLowerCase();
                    compareB = (b.concentration || 'edp').toLowerCase();
                    break;
                case 'size':
                    compareA = parseFloat(a.size) || 0;
                    compareB = parseFloat(b.size) || 0;
                    break;
                default:
                    compareA = (a.name || '').toLowerCase();
                    compareB = (b.name || '').toLowerCase();
            }

            // Handle comparison
            if (compareA < compareB) {
                return isReversed ? 1 : -1;
            } else if (compareA > compareB) {
                return isReversed ? -1 : 1;
            }
            return 0;
        });

        this.sortedCache.set(key, sortedArray);
        return sortedArray;
    }

    renderInventory(perfumesToRender = null) {
        if (!perfumesToRender) {
            perfumesToRender = this.getCurrentList();
        }
        
        // Apply status filter if set
        if (this.filterStatus && perfumesToRender === this.getCurrentList()) {
            perfumesToRender = perfumesToRender.filter(p => p.status === this.filterStatus);
        }
        
        // Apply advanced filters
        if (this.advancedFilters.brand) {
            perfumesToRender = perfumesToRender.filter(p => p.brand.toLowerCase().includes(this.advancedFilters.brand.toLowerCase()));
        }
        if (this.advancedFilters.concentration) {
            perfumesToRender = perfumesToRender.filter(p => p.concentration === this.advancedFilters.concentration);
        }
        if (this.advancedFilters.dateFrom) {
            const from = new Date(this.advancedFilters.dateFrom + '-01');
            perfumesToRender = perfumesToRender.filter(p => p.productionDate && new Date(p.productionDate) >= from);
        }
        if (this.advancedFilters.dateTo) {
            const to = new Date(this.advancedFilters.dateTo + '-01');
            to.setMonth(to.getMonth() + 1);
            perfumesToRender = perfumesToRender.filter(p => p.productionDate && new Date(p.productionDate) < to);
        }
        
        // Apply sorting if displaying full inventory
        if (perfumesToRender === this.getCurrentList()) {
            perfumesToRender = this.sortPerfumes(perfumesToRender);
        }
        
        // Check if mobile/tablet viewport (less than 1024px)
        const isMobileView = window.innerWidth < 1024;
        
        // Render cards on mobile, table on desktop
        if (isMobileView) {
            this.renderInventoryCards(perfumesToRender);
        } else {
            this.renderInventoryTable(perfumesToRender);
        }
    }

    
    renderInventoryCards(perfumesToRender) {
        const container = document.getElementById('inventoryTable');
        
        if (perfumesToRender.length === 0) {
            const itemType = currentView === 'bottles' ? 'bottles' : 'decants';
            container.innerHTML = `<div class="no-data">No ${itemType} in inventory. Add your first ${itemType.slice(0, -1)} above!</div>`;
            return;
        }

        const toRender = perfumesToRender.slice(0, this.displayLimit);
        const hasMore = perfumesToRender.length > this.displayLimit;

        const cardsHTML = `
            <div class="inventory-cards" role="list">
                ${toRender.map(perfume => {
                    const status = perfume.status || 'owned';
                    return `
                    <div class="perfume-card" data-perfumeId="${perfume.id}" role="listitem">
                        <div class="perfume-card-header">
                            <input type="checkbox" class="item-checkbox" data-id="${perfume.id}">
                            <div>
                                <div class="perfume-card-name">${perfume.name}</div>
                                <div class="perfume-card-brand">${perfume.brand}</div>
                            </div>
                            <span class="perfume-card-status status-${status}" data-i18n="status${status.charAt(0).toUpperCase() + status.slice(1).replace(/-/g, '')}">${this.getStatusLabel(status)}</span>
                        </div>
                        <div class="perfume-card-info">
                            <div class="perfume-card-info-item">
                                <span class="perfume-card-info-label" data-i18n="concentration">Concentration</span>
                                <span class="perfume-card-info-value">${this.getConcentrationLabel(perfume.concentration)}</span>
                            </div>
                            <div class="perfume-card-info-item">
                                <span class="perfume-card-info-label" data-i18n="quantity">Quantity</span>
                                <span class="perfume-card-info-value">${perfume.quantity || 'N/A'}</span>
                            </div>
                            <div class="perfume-card-info-item">
                                <span class="perfume-card-info-label" data-i18n="size">Size (ml)</span>
                                <span class="perfume-card-info-value">${perfume.size || 'N/A'}</span>
                            </div>
                            <div class="perfume-card-info-item">
                                <span class="perfume-card-info-label" data-i18n="productionDate">Production Date</span>
                                <span class="perfume-card-info-value">${perfume.productionDate || 'N/A'}</span>
                            </div>
                        </div>
                        <div class="perfume-card-actions">
                            <button onclick="inventory.editPerfume(${perfume.id})" class="edit-btn" data-i18n="edit" aria-label="Edit ${perfume.name}">${translate('editButton')}</button>
                            <button onclick="inventory.deletePerfume(${perfume.id})" class="delete-btn" data-i18n="delete" aria-label="Delete ${perfume.name}">${translate('deleteButton')}</button>
                        </div>
                    </div>
                    `;
                }).join('')}
                ${hasMore ? `<div class="load-more-container"><button class="btn btn-primary load-more-btn" onclick="inventory.loadMore()">Load More</button></div>` : ''}
            </div>
        `;
        
        container.innerHTML = cardsHTML;
    }

    updateBulkActions() {
        const checked = document.querySelectorAll('.item-checkbox:checked');
        const bulk = document.querySelector('.bulk-actions');
        bulk.style.display = checked.length > 0 ? 'flex' : 'none';
        const selectAllBtn = document.getElementById('selectAll');
        const all = document.querySelectorAll('.item-checkbox');
        selectAllBtn.textContent = checked.length === all.length ? 'Deselect All' : 'Select All';
    }

    loadMore() {
        this.displayLimit += 50;
        this.renderInventory();
    }

    renderInventoryTable(perfumesToRender) {
        const container = document.getElementById('inventoryTable');
        
        if (perfumesToRender.length === 0) {
            const itemType = currentView === 'bottles' ? 'bottles' : 'decants';
            container.innerHTML = `<div class="no-data">No ${itemType} in inventory. Add your first ${itemType.slice(0, -1)} above!</div>`;
            return;
        }

        const toRender = perfumesToRender.slice(0, this.displayLimit);
        const hasMore = perfumesToRender.length > this.displayLimit;

        const table = `
            <div class="inventory-table">
                <table>
                    <thead>
                        <tr>
                            <th><input type="checkbox" id="selectAllTable"></th>
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
                        ${toRender.map(perfume => {
                            const status = perfume.status || 'owned';
                            return `
                            <tr class="${this.getStatusClass(status)}">
                                <td><input type="checkbox" class="item-checkbox" data-id="${perfume.id}"></td>
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
                                    <button class="btn btn-delete" onclick="inventory.deletePerfume(${perfume.id})" aria-label="Delete ${perfume.name}">
                                        ${translate('deleteButton')}
                                    </button>
                                </td>
                            </tr>
                        `}).join('')}
                    </tbody>
                </table>
                ${hasMore ? `<div class="load-more-container"><button class="btn btn-primary load-more-btn" onclick="inventory.loadMore()">Load More</button></div>` : ''}
            </div>
        `;

        container.innerHTML = table;

        // Setup event listener for select all checkbox in table header
        const selectAllTable = document.getElementById('selectAllTable');
        if (selectAllTable) {
            selectAllTable.addEventListener('change', (e) => {
                document.querySelectorAll('.item-checkbox').forEach(cb => cb.checked = e.target.checked);
                this.updateBulkActions();
            });
        }
    }

    searchInventory(query) {
        this.displayLimit = 50;
        const currentList = this.getCurrentList();
        const filtered = currentList.filter(perfume => {
            const searchTerm = query.toLowerCase();
            return (
                perfume.name.toLowerCase().includes(searchTerm) ||
                perfume.brand.toLowerCase().includes(searchTerm) ||
                perfume.batchCode.toLowerCase().includes(searchTerm) ||
                perfume.productionDate.includes(searchTerm) ||
                (perfume.fragranceNotes && perfume.fragranceNotes.toLowerCase().includes(searchTerm)) ||
                (perfume.notes && perfume.notes.toLowerCase().includes(searchTerm))
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

        this.populateFilterBrands();
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

    showToast(message, undoCallback = null) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.setAttribute('aria-live', 'assertive');
        toast.innerHTML = `
            <span>${message}</span>
            <button class="toast-close">&times;</button>
            ${undoCallback ? `<button class="toast-undo">${translate('undo')}</button>` : ''}
        `;
        document.body.appendChild(toast);

        const removeToast = () => toast.remove();

        toast.querySelector('.toast-close').addEventListener('click', removeToast);
        if (undoCallback) {
            toast.querySelector('.toast-undo').addEventListener('click', () => {
                undoCallback();
                removeToast();
            });
        }

        setTimeout(removeToast, 5000);
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

// Initialize the inventory system when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        const inventory = new PerfumeInventory();
    });
} else {
    const inventory = new PerfumeInventory();
}
