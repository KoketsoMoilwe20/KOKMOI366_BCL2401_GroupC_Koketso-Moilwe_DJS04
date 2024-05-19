class ThemeSwitcher extends HTMLElement {
    static get observedAttributes() {
      return ['theme'];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'theme') {
        this.applyTheme(newValue);
      }
    }
  
    applyTheme(theme) {
      const isNight = theme === 'night';
      document.documentElement.style.setProperty('--color-dark', isNight ? '255, 255, 255' : '10, 10, 20');
      document.documentElement.style.setProperty('--color-light', isNight ? '10, 10, 20' : '255, 255, 255');
    }
  
    connectedCallback() {
      this.renderThemeSelector();
      this.addEventListener('change', (event) => {
        if (event.target.id === 'theme-select') {
            this.setAttribute('theme', event.target.value);
        }
      })
    }
    renderThemeSelector() {
        this.innerHTML = `
          <label for="theme-select">Theme:</label>
          <select id="theme-select">
            <option value="day">Day</option>
            <option value="night">Night</option>
          </select>
        `;
      }
    }
    
    customElements.define('theme-switcher', ThemeSwitcher);