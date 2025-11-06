# 🌸 Perfume Inventory Management System

A beautiful and intuitive web-based application for tracking your perfume collection with batch codes, production dates, and detailed inventory management.

## ✨ Features

- **📝 Easy Inventory Management**: Add, edit, and delete perfumes from your collection
- **🌍 Multi-Language Support**: Switch between English and Polish with one click
- **✨ Smart Autocomplete**: Auto-suggest from 40+ popular brands and 350+ popular perfumes including all flankers and variations
- **🏷️ Comprehensive Status Tracking**: Mark perfumes with multiple statuses
  - **Owned**: Perfumes in your collection
  - **Want to Get**: Perfumes on your wishlist to purchase
  - **Want to Try**: Perfumes you'd like to sample or test
  - **For Sale**: Perfumes you're selling
  - **Sold**: Perfumes that have been sold
- **🔍 Smart Search**: Quickly find perfumes by name, brand, or batch code
- **📊 Statistics Dashboard**: View total perfumes, brands, collection value, and detailed status breakdown at a glance
- **📅 Production Date Tracking**: Record and track production dates for each perfume
- **✅ Smart Batch Code Decoder**: Automatically decodes batch codes and populates production date (supports 6+ common formats)
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

2. Click **"🔍 Decode"** to automatically decode the batch code and fill production date
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

1. **Autocomplete Feature**: Start typing brand or perfume names - the system suggests from 40+ popular brands, 350+ popular perfumes (including all flankers and variations), and your own inventory. Use arrow keys to navigate, Enter to select
2. **Smart Batch Code Decoder**: Click "🔍 Decode" to automatically decode batch codes. Supports 8+ formats:
   - 4-digit codes (YYMM)
   - 5-digit codes (YYDDD - day of year)
   - 6-digit codes (YYMMDD or DDMMYY)
   - Letter + numbers (brand-specific formats)
   - Cosmetic industry codes (letter-year codes)
   - Week-based codes
   - If auto-decode fails, copies code and provides manual check options with instructions
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

- Batch code verification sites (for codes that can't be auto-decoded):
  - [CheckCosmetic.net](https://www.checkcosmetic.net/) - Clean, ad-free interface (Recommended)
  - [CheckFresh.com](https://www.checkfresh.com/) - Popular batch checker
- Icons: Unicode emoji characters
- Design inspired by modern web design trends

## 🔄 Version History

- **v1.9.6** (November 2025) - Mobile Experience Improvements
  - Enhanced mobile responsive design for better usability on phones
  - Fixed date input to stay as YYYY-MM text format (no calendar picker on mobile)
  - Added auto-formatting for date input (auto-inserts dash after year)
  - Improved input modes: numeric keyboard for numbers, decimal for size
  - Horizontal scrolling for inventory table on small screens
  - Optimized font sizes and spacing for mobile devices
  - 2-column grid for statistics cards on mobile
  - Full-width buttons and improved touch targets
  - Better modal sizing on mobile screens
  - Prevents iOS zoom on input focus (16px minimum font size)

- **v1.9.5** (November 2025) - Inline Concentration Editing
  - Click concentration badge in inventory to edit type directly
  - Dropdown selector appears with all 9 concentration options
  - Instant save on selection change
  - Consistent with quantity/size inline editing experience
  - Hover indicator shows editability

- **v1.9.4** (November 2025) - Concentration/Type Field Added
  - Added concentration field to track perfume type (EDP, EDT, Parfum, etc.)
  - 9 concentration options: EDP, EDT, Parfum/Extrait, EDC, EDL, Intense, Elixir, Absolu, Other
  - Concentration displayed as colored badge in inventory table
  - Included in CSV exports for complete tracking
  - Translated labels for both English and Polish
  - Default value: Eau de Parfum (EDP)

- **v1.9.3** (November 2025) - Inline Editing for Quantity and Size
  - Click on quantity or size values in inventory table to edit them directly
  - Inline input fields appear for quick editing
  - Press Enter or click outside to save changes
  - Visual hover indicator (✏️ icon) shows editable fields
  - Allows updating quantity/size after changing status from wishlist to owned
  - No need to delete and re-add items to update values

- **v1.9.2** (November 2025) - Wishlist Fields Enhancement
  - Quantity and Size fields now optional for "Want to Get" and "Want to Try" statuses
  - Fields automatically become optional/required based on selected status
  - Visual indicator shows when fields are optional
  - Total Units statistic excludes wishlist items (only counts owned/for-sale/sold)
  - Display shows "-" for empty quantity/size in wishlist items
  - Default values of 0 set for wishlist items when fields left empty

- **v1.9.1** (November 2025) - Dynamic Autocomplete Enhancement
  - Autocomplete now includes ALL previously added brands and perfumes
  - Fresh data fetched on every keystroke ensures newest entries appear
  - Custom brands and perfumes immediately available in suggestions
  - Autocomplete lists update after adding, deleting, or restoring inventory
  - No need to manually add to known lists - fully automatic

- **v1.9.0** (November 2025) - Multi-Language Support
  - Added language switcher with English 🇬🇧 and Polish 🇵🇱 translations
  - Comprehensive translation of all UI elements (40+ text keys)
  - Translated table headers, form labels, buttons, and placeholders
  - Language preference saved to localStorage
  - Responsive language switcher in header
  - Complete Polish translations for perfume inventory terminology

- **v1.4.0** (November 2025) - Smart Batch Code Decoder
  - Automatic batch code decoding and date population
  - Supports 8+ common batch code formats
  - Fixed complex cosmetic codes (e.g., "ABY11ET" now correctly decodes to 2024-01)
  - Improved year and month interpretation for cosmetic industry codes
  - Auto-fills production date field when decoded successfully
  - Verification reminder in success message
  - Improved fallback modal with clear instructions
  - Removed non-working verification sites
  - Better error messaging for unrecognized formats
  - Supports YYMM, YYDDD, YYMMDD, letter+number, complex letter-month codes

- **v1.3.0** (November 2025) - Smart Autocomplete Feature
  - Added autocomplete for brand names (40+ popular brands included)
  - Added comprehensive autocomplete for perfume names (350+ fragrances)
  - Complete Mugler collection (Angel Fantasm, Alien Goddess, etc.)
  - Includes all flankers and variations (EDT, EDP, Parfum, Intense versions)
  - Covers luxury, designer, and niche brands (Amouage, Xerjoff, Roja, Kilian, Initio)
  - Classic and vintage fragrances (Shalimar, Mitsouko, L'Heure Bleue)
  - Turkish/Middle Eastern and Nishane collection
  - Brand-specific perfume suggestions prioritized
  - Intelligent suggestions from existing inventory
  - Keyboard navigation support (arrow keys and Enter)
  - Ensures consistent data entry across inventory

- **v1.2.1** (November 2025) - Batch Code Verification Improvement
  - Improved batch code checker with modal popup
  - Auto-copy batch code to clipboard
  - Multiple verification site options (ad-free alternatives)
  - Better user experience without popup ads

- **v1.8.0** (November 2025) - Production Date Format Update
  - Changed production date format from full date (YYYY-MM-DD) to month precision (YYYY-MM)
  - Updated input field to use month picker for easier date entry
  - Modified batch code decoder to return YYYY-MM format
  - Updated date display to show "Month Year" format (e.g., "January 2021")
  - Simplified date tracking to match typical batch code precision

- **v1.7.0** (November 2025) - Fragrance Notes Feature
  - Added dedicated "Fragrance Notes" field for storing perfume composition
  - Support for top, middle, and base notes documentation
  - Renamed existing notes field to "Personal Notes" for clarity
  - Fragrance notes displayed in styled table cell with visual distinction
  - Updated CSV export to include both fragrance notes and personal notes
  - Enhanced form with helpful placeholders and tips

- **v1.6.0** (November 2025) - Enhanced Batch Code Verification
  - Integrated CosmeticCheck.app with brand-specific direct links
  - Automatic brand URL mapping for 50+ popular perfume brands
  - Smart fallback modal with 3 verification options
  - CosmeticCheck.app featured as primary verification method (791 brands supported)
  - Improved verification workflow with brand-specific pages

- **v1.5.0** (November 2025) - Optional Production Date Update
  - Made production date and batch code fields optional
  - Added support for perfumes without batch codes
  - Displays "Unknown" for missing production dates
  - Displays "N/A" for missing batch codes
  - Improved user experience for vintage or unboxed perfumes

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
