// Perfume Inventory Management System

class PerfumeInventory {
    constructor() {
        this.perfumes = this.loadFromLocalStorage();
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.renderInventory();
        this.updateStats();
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
        
        if (!brand) {
            alert('Please enter the brand name first to check the batch code');
            return;
        }
        
        // Open CheckFresh in a new window with the batch code
        const url = `https://www.checkfresh.com/?lang=en`;
        window.open(url, '_blank');
        
        this.showToast(`Check batch code "${batchCode}" for ${brand} on CheckFresh.com`);
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
