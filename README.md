# 🌸 Perfume Inventory Management System

A beautiful and intuitive web-based application for tracking your perfume collection with batch codes, production dates, and detailed inventory management.

## ✨ Features

- **📝 Easy Inventory Management**: Add, edit, and delete perfumes from your collection
- **✨ Smart Autocomplete**: Auto-suggest from 40+ popular brands and 200+ popular perfumes including flankers and variations
- **🏷️ Comprehensive Status Tracking**: Mark perfumes with multiple statuses
  - **Owned**: Perfumes in your collection
  - **Want to Get**: Perfumes on your wishlist to purchase
  - **Want to Try**: Perfumes you'd like to sample or test
  - **For Sale**: Perfumes you're selling
  - **Sold**: Perfumes that have been sold
- **🔍 Smart Search**: Quickly find perfumes by name, brand, or batch code
- **📊 Statistics Dashboard**: View total perfumes, brands, collection value, and detailed status breakdown at a glance
- **📅 Production Date Tracking**: Record and track production dates for each perfume
- **✅ Batch Code Verification**: Auto-copy batch codes and choose from multiple verification sites (ad-free options)
- **💾 Data Persistence**: All data stored locally in your browser using LocalStorage
- **📤 Export/Import**: Backup and restore your inventory as JSON files
- **📊 CSV Export**: Export your collection to CSV for spreadsheet applications with status information
- **📱 Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **🎨 Modern UI**: Beautiful gradient design with smooth animations and color-coded status indicators

## 🚀 Live Demo

Visit the live application at: [https://hanswors1-ui.github.io/perfume_inventory.io/](https://hanswors1-ui.github.io/perfume_inventory.io/)

## 🛠️ Installation & Usage

### Option 1: Use GitHub Pages (Recommended)

1. Fork this repository
2. Go to your repository Settings → Pages
3. Under "Source", select the `main` branch
4. Click Save
5. Your site will be published at `https://[your-username].github.io/perfume_inventory.io/`

### Option 2: Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/hanswors1-ui/perfume_inventory.io.git
   cd perfume_inventory.io
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - No build process or server required!

3. **Or use a local server** (optional)
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (npx)
   npx serve
   
   # Using PHP
   php -S localhost:8000
   ```
   Then visit `http://localhost:8000`

## 📖 How to Use

### Adding a Perfume

1. Fill in the form with perfume details:
   - **Brand**: Start typing and select from popular brands or your previous entries (autocomplete enabled)
   - **Perfume Name**: Start typing - suggestions will appear based on the selected brand and your inventory (autocomplete enabled)
   - **Production Date**: When the perfume was manufactured
   - **Batch Code**: The batch/lot code from the bottle
   - **Quantity**: Number of bottles you have (use 0 for wishlist items)
   - **Status**: Choose from five options:
     - **Owned**: Perfumes you currently own
     - **Want to Get**: Perfumes you plan to purchase
     - **Want to Try**: Perfumes you'd like to sample
     - **For Sale**: Perfumes you're selling
     - **Sold**: Perfumes that have been sold
   - **Notes**: Any additional information (optional)

2. Click **"🔍 Verify"** to copy the batch code and choose from multiple verification sites
3. Click **"Add Perfume"** to save to your inventory

### Managing Your Inventory

- **Search**: Use the search bar to filter perfumes by name, brand, or batch code
- **Change Status**: Use the dropdown in each row to quickly update a perfume's status
  - 🔵 **Owned** (blue badge): Perfumes in your personal collection
  - 🟢 **Want to Get** (green badge): Perfumes on your wishlist to purchase
  - 🟣 **Want to Try** (purple badge): Perfumes you'd like to sample or test
  - 🟠 **For Sale** (orange badge): Perfumes you're selling
  - 🔴 **Sold** (red badge): Perfumes that have been sold (shown with strikethrough)
- **Delete**: Click the "Delete" button to remove a perfume from inventory
- **Visual Indicators**: Rows are color-coded based on status for easy identification
- **Statistics**: Dashboard shows breakdown of perfumes by all five status categories
- **Wishlist Management**: Use "Want to Get" and "Want to Try" to track perfumes you're interested in

### Backup & Export

- **Export to CSV**: Download your inventory as a spreadsheet-compatible CSV file
- **Backup Data**: Save your complete inventory as a JSON file
- **Restore Data**: Upload a previously saved JSON backup to restore your inventory

## 🏗️ Project Structure

```
perfume_inventory.io/
├── index.html          # Main HTML structure
├── styles.css          # Styling and animations
├── app.js              # Application logic and functionality
├── README.md           # This file
├── _config.yml         # Jekyll configuration for GitHub Pages
└── .nojekyll           # (Optional) Bypass Jekyll processing
```

## 🔧 Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with gradients, flexbox, and animations
- **Vanilla JavaScript**: No frameworks or dependencies
- **LocalStorage API**: Client-side data persistence
- **GitHub Pages**: Free hosting
- **Jekyll**: Static site generation (optional)

## 💡 Tips

1. **Autocomplete Feature**: Start typing brand or perfume names - the system suggests from 40+ popular brands, 200+ popular perfumes (including flankers and variations), and your own inventory. Use arrow keys to navigate, Enter to select
2. **Batch Code Verification**: Click "🔍 Verify" to copy the batch code and choose from multiple verification sites (CheckCosmetic.net recommended for ad-free experience)
3. **Wishlist Tracking**: Use "Want to Get" for perfumes you plan to buy and "Want to Try" for samples or testing
3. **Consistent Data Entry**: Use autocomplete to ensure brand and perfume names are spelled consistently
4. **Quantity Field**: Set quantity to 0 for wishlist items ("Want to Get" or "Want to Try")
5. **Regular Backups**: Export your inventory regularly to avoid data loss
6. **Browser Data**: Your inventory is stored in your browser's LocalStorage. Clearing browser data will delete your inventory
7. **Import/Export**: Use the backup feature to transfer your inventory between devices
8. **Quick Status Changes**: Easily move perfumes from wishlist to owned when you acquire them

## 🔒 Privacy & Data

- All data is stored locally in your browser using LocalStorage
- No data is sent to external servers (except when using the CheckFresh verification link)
- Your inventory remains completely private
- Export backups to secure your data

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🐛 Issues & Support

If you encounter any issues or have suggestions:
- Open an issue on [GitHub Issues](https://github.com/hanswors1-ui/perfume_inventory.io/issues)
- Provide detailed description of the problem
- Include browser version and steps to reproduce

## 📧 Contact

Created by [@hanswors1-ui](https://github.com/hanswors1-ui)

## 🙏 Acknowledgments

- Batch code verification sites:
  - [CheckCosmetic.net](https://www.checkcosmetic.net/) - Clean, ad-free interface
  - [CheckFresh.com](https://www.checkfresh.com/) - Popular batch checker
  - [Calculator.tf](https://www.calculator.tf/cosmetics-calculator/) - Simple tool
- Icons: Unicode emoji characters
- Design inspired by modern web design trends

## 🔄 Version History

- **v1.3.0** (November 2025) - Smart Autocomplete Feature
  - Added autocomplete for brand names (40+ popular brands included)
  - Added comprehensive autocomplete for perfume names (200+ fragrances)
  - Includes flankers and variations (EDT, EDP, Parfum, Intense versions)
  - Covers luxury, designer, and niche brands (including Turkish/Middle Eastern)
  - Brand-specific perfume suggestions prioritized
  - Intelligent suggestions from existing inventory
  - Keyboard navigation support (arrow keys and Enter)
  - Ensures consistent data entry across inventory

- **v1.2.1** (November 2025) - Batch Code Verification Improvement
  - Improved batch code checker with modal popup
  - Auto-copy batch code to clipboard
  - Multiple verification site options (ad-free alternatives)
  - Better user experience without popup ads

- **v1.2.0** (November 2025) - Wishlist Feature Update
  - Added "Want to Get" status for purchase wishlist
  - Added "Want to Try" status for sampling wishlist
  - Extended statistics dashboard with new status categories
  - Enhanced color-coding system (5 status types)
  - Comprehensive perfume tracking from discovery to sale

- **v1.1.0** (November 2025) - Status Management Update
  - Added status tracking: Owned, For Sale, Sold
  - Visual status indicators with color-coded badges
  - Status statistics in dashboard
  - Quick status change dropdown in inventory table
  - Strikethrough styling for sold items
  - Status included in CSV exports

- **v1.0.0** (2025) - Initial release
  - Core inventory management features
  - LocalStorage persistence
  - Export/Import functionality
  - Responsive design
  - Batch code verification integration

---

Made with ❤️ for perfume enthusiasts
