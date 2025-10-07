// ====== DATA MAPS ======
// Map để lưu trữ categories
const categoriesMap = new Map([
    ["Smartphones", "link-a.html"],
    ["Tablets", "link-b.html"],
    ["Laptops & Computers", "link-c.html"],
    ["Wearable Devices", "link-d.html"],
    ["Headphones & Speakers", "link-e.html"],
    ["Console & Gaming", "link-f.html"],
    ["Cameras & Photography", "link-g.html"],
    ["VR/AR Devices", "link-h.html"],
    ["Drones & Robots", "link-i.html"],
    ["Tech Accessories", "link-j.html"],
    ["Smart Home", "link-k.html"],
    ["Electric Vehicles", "link-l.html"],
    ["3D Printers", "link-m.html"],
    ["IoT Devices", "link-n.html"],
    ["AI Gadgets", "link-o.html"]
]);

// Map để lưu trữ quick links
const quickLinksMap = new Map([
    ["List Product", "link-k.html"],
    ["Advanced Search", "link-l.html"],
    ["User Guide", "link-m.html"],
    ["FAQ", "link-n.html"],
    ["Contact Support", "link-o.html"],
    ["Pricing Plans", "link-p.html"],
    ["Community Forum", "link-q.html"],
    ["Blog & News", "link-r.html"],
    ["Partner Program", "link-s.html"],
    ["Mobile App", "link-t.html"]
]);

// ====== GENERATOR FUNCTIONS ======
// Function để generate categories
function generateCategories() {
    const categoryList = document.querySelector('.category-list');
    if (!categoryList) return;
    
    categoryList.innerHTML = '';
    for (const [name, link] of categoriesMap) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link;
        a.textContent = name;
        li.appendChild(a);
        categoryList.appendChild(li);
    }
}

// Function để generate quick links
function generateQuickLinks() {
    const quickLinksList = document.querySelector('.quick-links-list');
    if (!quickLinksList) return;
    
    quickLinksList.innerHTML = '';
    for (const [name, link] of quickLinksMap) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link;
        a.textContent = name;
        li.appendChild(a);
        quickLinksList.appendChild(li);
    }
}

// Function để generate tất cả
function generateAllMenus() {
    generateCategories();
    generateQuickLinks();
}

// ====== UTILITY FUNCTIONS ======
// Function để thêm category mới
function addCategory(name, link) {
    categoriesMap.set(name, link);
    generateCategories();
}

// Function để thêm quick link mới
function addQuickLink(name, link) {
    quickLinksMap.set(name, link);
    generateQuickLinks();
}

// Function để xóa category
function removeCategory(name) {
    categoriesMap.delete(name);
    generateCategories();
}

// Function để xóa quick link
function removeQuickLink(name) {
    quickLinksMap.delete(name);
    generateQuickLinks();
}

// Function để cập nhật category
function updateCategory(oldName, newName, newLink) {
    categoriesMap.delete(oldName);
    categoriesMap.set(newName, newLink);
    generateCategories();
}

// Function để cập nhật quick link
function updateQuickLink(oldName, newName, newLink) {
    quickLinksMap.delete(oldName);
    quickLinksMap.set(newName, newLink);
    generateQuickLinks();
}

// Function để lấy tất cả categories dưới dạng array
function getCategoriesArray() {
    return Array.from(categoriesMap.entries());
}

// Function để lấy tất cả quick links dưới dạng array
function getQuickLinksArray() {
    return Array.from(quickLinksMap.entries());
}

// Function để import data từ object
function importCategories(dataObject) {
    categoriesMap.clear();
    Object.entries(dataObject).forEach(([name, link]) => {
        categoriesMap.set(name, link);
    });
    generateCategories();
}

function importQuickLinks(dataObject) {
    quickLinksMap.clear();
    Object.entries(dataObject).forEach(([name, link]) => {
        quickLinksMap.set(name, link);
    });
    generateQuickLinks();
}

// Function để export data dưới dạng JSON
function exportData() {
    return {
        categories: Object.fromEntries(categoriesMap),
        quickLinks: Object.fromEntries(quickLinksMap)
    };
}

// ====== AUTO INIT ======
// Tự động chạy khi DOM loaded
document.addEventListener('DOMContentLoaded', function() {
    generateAllMenus();
    console.log('Menus generated successfully!');
    console.log('Categories:', categoriesMap.size, 'items');
    console.log('Quick Links:', quickLinksMap.size, 'items');
});