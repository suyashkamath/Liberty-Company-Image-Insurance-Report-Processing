// Initialize Lucide Icons
lucide.createIcons();

// Company URLs mapping
const companyUrls = {
  Tata: {
    image: 'https://tata-image-report.vercel.app',
    excel: 'https://tata-excel-report.vercel.app'
  },
  Digit: {
    image: 'https://digit-image-report.vercel.app',
    excel: 'https://digit-excel-report.vercel.app'
  },
  ICICI: {
    image: 'https://icici-image-report.vercel.app',
    excel: 'https://icici-excel-report.vercel.app'
  },
  Reliance: {
    image: 'https://reliance-image-report.vercel.app',
    excel: 'https://reliance-excel-report.vercel.app'
  },
  Future: {
    image: 'https://future-image-report.vercel.app',
    excel: 'https://future-excel-report.vercel.app'
  },
  HDFC: {
    image: 'https://hdfc-image-report.vercel.app',
    excel: 'https://hdfc-excel-report.vercel.app'
  },
  Chola: {
    image: 'https://chola-image-report.vercel.app',
    excel: 'https://chola-excel-report.vercel.app'
  },
    Bajaj: {
    image: 'https://bajaj-image-report.vercel.app',
    excel: 'https://bajaj-excel-report.vercel.app'
  },
  Royal:{
    image:'https://royal-image-report.vercel.app',
    excel:'https://royal-excel-report.vercel.app'
  },
  SBI:{
    image:'https://sbi-image-report.vercel.app',
    excel:'https://sbi-excel-report.vercel.app'
  },
  Zuno:{
    image:'https://zuno-image-report.vercel.app',
    excel:'https://zuno-excel-report.vercel.app'
  },
  Liberty:{
    image:'https://liberty-image-report.vercel.app',
    excel:'https://liberty-excel-report.vercel.app'
  }
};

// File type buttons
const fileTypeBtns = document.querySelectorAll('.file-type-btn');
let currentFileType = 'image';

// Handle file type selection
fileTypeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    fileTypeBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFileType = btn.dataset.type;
  });
});

// Proceed button
const proceedBtn = document.getElementById('proceedBtn');
const companySelect = document.getElementById('company');

proceedBtn.addEventListener('click', () => {
  const selectedCompany = companySelect.value;
  
  if (!selectedCompany) {
    alert('Please select a company first!');
    return;
  }
  
  const url = companyUrls[selectedCompany][currentFileType];
  if (url) {
    window.open(url, '_blank');
  } else {
    alert('URL not found. Please check the configuration.');
  }
});

// Disable proceed button if no company selected
companySelect.addEventListener('change', () => {
  proceedBtn.disabled = !companySelect.value;
});
