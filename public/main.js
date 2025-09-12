
    function animateFeaturesItems() {
        const items = document.querySelectorAll('.features_item');
        const triggerOffset = 220;
        const offsetY = 20;
        items.forEach((item, index) => {
          const rect = item.getBoundingClientRect();
          const distanceFromTop = rect.top;
          
    
      
          const minScales = [0.85, 0.88, 0.91, 0.94, 0.97, 1];
          const minOpacitys = [0.5, 0.6, 0.7, 0.8, 0.9, 1];
      
          const minScale = minScales[index] ?? minScales[minScales.length - 1];
          const minOpacity = minOpacitys[index] ?? minOpacitys[minOpacitys.length - 1];
      
          // Розрахунок translateY один раз — і зберігаємо в data атрибут
          if (!item.dataset.translate) {
            const reversedIndex = items.length - 1 - index;
            const translateY = reversedIndex === 0
              ? 0
              : offsetY * reversedIndex + rect.height * (reversedIndex - 1);
            item.dataset.translate = translateY;
          }
      
          const translateY = item.dataset.translate;
      
          if (distanceFromTop < triggerOffset) {
            const scale = Math.max(minScale, 1 - (triggerOffset - distanceFromTop) / 100);
            const opacity = Math.max(minOpacity, 1 - (320 - distanceFromTop) / 300);
            item.style.transform = `scale(${scale}) translateY(${translateY}px)`;
            item.style.opacity = opacity;
          } else {
            item.style.transform = `scale(1) translateY(${translateY}px)`;
            item.style.opacity = 1;
          }
        });
      }

      
      
      
    if (!(window.screen.width <= 767)) {
        // Виклик при завантаженні
      window.addEventListener('DOMContentLoaded', animateFeaturesItems);
      
      // Виклик при скролі
      window.addEventListener('scroll', animateFeaturesItems);
          
    }
