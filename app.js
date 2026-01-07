document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenuBtn?.addEventListener("click", () =>
    mobileMenu.classList.toggle("hidden")
  );

  mobileMenu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => mobileMenu.classList.add("hidden"));
  });

  const featuresGrid = document.getElementById("features-grid");

if (featuresGrid && siteContent.features) {
  featuresGrid.innerHTML = siteContent.features
    .map((f) => {
      const isImage = f.icon.includes("/");

      return `
        <div class="group bg-white p-6 rounded-2xl hover:shadow-md transition text-center">
          
          <div class="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-xl bg-primary/10">
            ${
              isImage
                ? `<img src="${f.icon}" alt="${f.title}" class="w-8 h-8 object-contain" />`
                : `<span class="text-2xl">${f.icon}</span>`
            }
          </div>

          <h3 class="font-bold text-dark mb-2 text-lg ">
            ${f.title}
          </h3>
          <p class="text-gray-600 text-sm leading-relaxed text-[17px] font-semibold">
            ${f.desc}
          </p>
        </div>
      `;
    })
    .join("");
}

const benefitsGrid = document.getElementById("benefits-grid");

if (benefitsGrid && siteContent.benefits) {
  benefitsGrid.innerHTML = siteContent.benefits
    .map((b) => {
      const isImage = b.icon.includes("/");

      return `
        <div class="group bg-gray-50 p-6 rounded-2xl hover:shadow-md transition">
          
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10">
              ${
                isImage
                  ? `<img src="${b.icon}" alt="${b.title}" class="w-6 h-6 object-contain" />`
                  : `<span class="text-primary text-2xl">${b.icon}</span>`
              }
            </div>

            <div>
              <h3 class="font-extrabold text-dark mb-1 text-lg">
                ${b.title}
              </h3>
              <p class="text-gray-600 text-sm leading-relaxed text-[17px] font-semibold">
                ${b.desc}
              </p>
            </div>
          </div>

        </div>
      `;
    })
    .join("");
}


  const testimonialsGrid = document.getElementById("testimonials-grid");
  if (testimonialsGrid && siteContent.testimonials) {
    testimonialsGrid.innerHTML = siteContent.testimonials
      .map(
        (t) => `
      <div class="bg-gray-100 p-8 rounded-2xl">
        <p class="text-gray-600 mb-6 italic text-left leading-relaxed text-[17px] font-semibold">"${t.text}"</p>
       <div class="flex items-center gap-4 mt-10">
     <img
     src="${t.image}"
     alt="${t.name}"
     onerror="this.src='https://via.placeholder.com/100?text=User'"
     class="w-14 h-14 rounded-full object-cover"
    />
        
    <div class="leading-tight">
     <p class="font-semibold text-dark">${t.name}</p>
     <p class="text-sm text-gray-500">${t.role}</p>
    </div>
  </div>
      </div>
    `
      )
      .join("");
  }

  const pricingGrid = document.getElementById("pricing-grid");
  if (pricingGrid && siteContent.pricing) {
    pricingGrid.innerHTML = siteContent.pricing
      .map(
        (p) => `
      <div class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition text-center ${
        p.popular ? "ring-2 ring-primary relative" : ""
      }">
        ${
          p.popular
            ? '<span class="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs px-3 py-1 rounded-full">Most Popular</span>'
            : ""
        }
        <h3 class="text-3xl font-bold text-dark mb-3 text-center">${p.name}</h3>
        <div class="mb-4 text-center mr-2">
          <span class="text-3xl font-bold text-primary">${p.price}</span>
          <span class="text-gray-500 ">${p.period}</span>
        </div>
        <ul class="space-y-2 mb-6">
          ${p.features
            .map(
              (f) =>
                `<li class="flex ml-4 text-[15px]  items-center text-sm text-gray-600 font-semibold"><svg class="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>${f}</li>`
            )
            .join("")}
        </ul>
        <a href="#booking" class="block text-center bg-primary text-white py-3 rounded-lg font-medium hover:bg-opacity-90 transition">Get Instant Access</a>
      </div>
    `
      )
      .join("");
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-8");
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll("section").forEach((section) => {
    section.classList.add(
      "transition-all",
      "duration-700",
      "opacity-0",
      "translate-y-8"
    );
    observer.observe(section);
  });
});
