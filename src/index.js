class SignatureLTCO {
  constructor() {
		this.themeSwitch = {
			dark: {
				src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1Mi4xMzgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCA1Mi4xMzggMTgiPjxyZWN0IHdpZHRoPSI1Mi4xMzgiIGhlaWdodD0iMTgiIGZpbGw9IiMyMDIwMjciLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1LjE1IDUuMDUpIj48cGF0aCBkPSJNMjQuODksMzIuMDMxaDEuN1YyNi40NDRoLTEuN1YyNS40MWgzLjAyMXY2LjYyMWgxLjcwN3YxLjAzNEgyNC44OVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNC44OSAtMjUuMjAzKSIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik01Ni4zNDEsMzQuNzMxYTEuNDQ2LDEuNDQ2LDAsMCwxLTEuMTI4LS40LDEuNTIxLDEuNTIxLDAsMCwxLS4zNjItMS4wNDlWMzAuNDI3SDUzLjNWMjkuMzkzaDEuMDU1YS42NS42NSwwLDAsMCwuNDU1LS4xMjguNjIxLjYyMSwwLDAsMCwuMTM0LS40NjFWMjcuNTFoMS4yMzF2MS44ODNoMi4xNzJ2MS4wMzRINTYuMTg0VjMzLjdoMi4xNzJ2MS4wMzRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDcuNDIyIC0yNi44NjkpIiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTg3LjIzNCw0MS41NzZhMi45MjYsMi45MjYsMCwwLDEtMS4xLS4yLDIuMjQ3LDIuMjQ3LDAsMCwxLS44MjgtLjU1OSwyLjQyNywyLjQyNywwLDAsMS0uNTE3LS44NzksMy43NzgsMy43NzgsMCwwLDEsMC0yLjMxNywyLjQ2MiwyLjQ2MiwwLDAsMSwuNTE5LS44NzcsMi4zLDIuMywwLDAsMSwuODI4LS41NSwyLjg3OCwyLjg3OCwwLDAsMSwxLjA5LS4yMDcsMi4zODYsMi4zODYsMCwwLDEsMS4zNjYuMzUyLDIuMjUxLDIuMjUxLDAsMCwxLC43ODYuOTMxbC0xLjAzNC41NTlhMS4zNywxLjM3LDAsMCwwLS40MTQtLjU1MiwxLjExMSwxLjExMSwwLDAsMC0uNzItLjIwNywxLjE2NywxLjE2NywwLDAsMC0uOS4zNDEsMS4zMTYsMS4zMTYsMCwwLDAtLjMxNy45MzF2Ljg5YTEuMzIyLDEuMzIyLDAsMCwwLC4zMTcuOTI3LDEuMTkyLDEuMTkyLDAsMCwwLC45MjUuMzQ2QTEuMjIzLDEuMjIzLDAsMCwwLDg4LDQwLjI4NWExLjU3NywxLjU3NywwLDAsMCwuNDU5LS41NzlsLjk5My41OWEyLjIxOCwyLjIxOCwwLDAsMS0uODExLjkyN0EyLjUzMiwyLjUzMiwwLDAsMSw4Ny4yMzQsNDEuNTc2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTcyLjI1NCAtMzMuNTkyKSIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMTYuMjU3LDQxLjU4NGEyLjg3OCwyLjg3OCwwLDAsMS0xLjA5LS4yLDIuMjQ3LDIuMjQ3LDAsMCwxLS44MjgtLjU1OSwyLjQyNywyLjQyNywwLDAsMS0uNTE3LS44NzksMy43NzgsMy43NzgsMCwwLDEsMC0yLjMxNywyLjQ2MiwyLjQ2MiwwLDAsMSwuNTE3LS44NzksMi4zLDIuMywwLDAsMSwuODI4LS41NTksMy4xLDMuMSwwLDAsMSwyLjE3NywwLDIuMzA3LDIuMzA3LDAsMCwxLC44MjguNTU5LDIuNTI0LDIuNTI0LDAsMCwxLC41MTcuODc5LDMuODE5LDMuODE5LDAsMCwxLDAsMi4zMTcsMi40ODIsMi40ODIsMCwwLDEtLjUxNy44NzksMi4yNTUsMi4yNTUsMCwwLDEtLjgyOC41NTlBMi44NzgsMi44NzgsMCwwLDEsMTE2LjI1Nyw0MS41ODRabTAtMS4wMTRhMS4xODYsMS4xODYsMCwwLDAsLjktLjM0NiwxLjQyMSwxLjQyMSwwLDAsMCwuMzMxLTEuMDJ2LS44MjhhMS40MTUsMS40MTUsMCwwLDAtLjMzMS0xLjAxOCwxLjMzOSwxLjMzOSwwLDAsMC0xLjgsMCwxLjQyNiwxLjQyNiwwLDAsMC0uMzMxLDEuMDE4VjM5LjJhMS40MywxLjQzLDAsMCwwLC4zMzEsMS4wMiwxLjE5MiwxLjE5MiwwLDAsMCwuOS4zNDhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTUuMjc4IC0zMy42KSIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xNTIuNDgyLDU1Ljc4MmExLjA2MSwxLjA2MSwwLDAsMS0uNzY2LS4yMjguNzU5Ljc1OSwwLDAsMS0uMjI4LS41NTl2LS4zMWEuNzY4Ljc2OCwwLDAsMSwuMjI4LS41NTksMS40LDEuNCwwLDAsMSwxLjUzMSwwLC43NjguNzY4LDAsMCwxLC4yMjguNTU5VjU1YS43NTkuNzU5LDAsMCwxLS4yMjguNTU5QTEuMDYxLDEuMDYxLDAsMCwxLDE1Mi40ODIsNTUuNzgyWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNS4yOTYgLTQ3Ljc5OCkiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMTc1LjE5LDMzLjdsMy40LTkuMjloMS4xOWwtMy40LDkuMjlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTQ0LjA5MyAtMjQuNDEpIiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTIwNS41NCwzNy4yNTRsMy4yNDgtMS43NTl2LS4wNzRsLTMuMjQ4LTEuNzU5VjMyLjRsNC40NCwyLjQzM3YxLjI0MWwtNC40NCwyLjQ1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE2OC4xNjQgLTMwLjc0NykiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+',
				cursor: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAABHNCSVQICAgIfAhkiAAAAHFJREFUGJV9zkEVwkAUQ9H3o4BVaV1goQ5ACUigDnACEmYcIOPTFRiYsOmybbb35CQB0HWfs+SrzSmCA1DAU+ZQYsEnq/Eoqd3WEYB79H16S22+2mkDhMB1U8NvtabH3gfN8/HVWlzA1ea3rFfwmDmUP3EEKz2FrG2WAAAAAElFTkSuQmCC'
			},
			light: {
				src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1Mi4xMzgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCA1Mi4xMzggMTgiPjxyZWN0IHdpZHRoPSI1Mi4xMzgiIGhlaWdodD0iMTgiIGZpbGw9IiNGQUZBRkYiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1LjE1IDUuMDUpIj48cGF0aCBkPSJNMjQuODksMzIuMDMxaDEuN1YyNi40NDRoLTEuN1YyNS40MWgzLjAyMXY2LjYyMWgxLjcwN3YxLjAzNEgyNC44OVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNC44OSAtMjUuMjAzKSIgZmlsbD0iIzIwMjAyNyIvPjxwYXRoIGQ9Ik01Ni4zNDEsMzQuNzMxYTEuNDQ2LDEuNDQ2LDAsMCwxLTEuMTI4LS40LDEuNTIxLDEuNTIxLDAsMCwxLS4zNjItMS4wNDlWMzAuNDI3SDUzLjNWMjkuMzkzaDEuMDU1YS42NS42NSwwLDAsMCwuNDU1LS4xMjguNjIxLjYyMSwwLDAsMCwuMTM0LS40NjFWMjcuNTFoMS4yMzF2MS44ODNoMi4xNzJ2MS4wMzRINTYuMTg0VjMzLjdoMi4xNzJ2MS4wMzRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDcuNDIyIC0yNi44NjkpIiBmaWxsPSIjMjAyMDI3Ii8+PHBhdGggZD0iTTg3LjIzNCw0MS41NzZhMi45MjYsMi45MjYsMCwwLDEtMS4xLS4yLDIuMjQ3LDIuMjQ3LDAsMCwxLS44MjgtLjU1OSwyLjQyNywyLjQyNywwLDAsMS0uNTE3LS44NzksMy43NzgsMy43NzgsMCwwLDEsMC0yLjMxNywyLjQ2MiwyLjQ2MiwwLDAsMSwuNTE5LS44NzcsMi4zLDIuMywwLDAsMSwuODI4LS41NSwyLjg3OCwyLjg3OCwwLDAsMSwxLjA5LS4yMDcsMi4zODYsMi4zODYsMCwwLDEsMS4zNjYuMzUyLDIuMjUxLDIuMjUxLDAsMCwxLC43ODYuOTMxbC0xLjAzNC41NTlhMS4zNywxLjM3LDAsMCwwLS40MTQtLjU1MiwxLjExMSwxLjExMSwwLDAsMC0uNzItLjIwNywxLjE2NywxLjE2NywwLDAsMC0uOS4zNDEsMS4zMTYsMS4zMTYsMCwwLDAtLjMxNy45MzF2Ljg5YTEuMzIyLDEuMzIyLDAsMCwwLC4zMTcuOTI3LDEuMTkyLDEuMTkyLDAsMCwwLC45MjUuMzQ2QTEuMjIzLDEuMjIzLDAsMCwwLDg4LDQwLjI4NWExLjU3NywxLjU3NywwLDAsMCwuNDU5LS41NzlsLjk5My41OWEyLjIxOCwyLjIxOCwwLDAsMS0uODExLjkyN0EyLjUzMiwyLjUzMiwwLDAsMSw4Ny4yMzQsNDEuNTc2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTcyLjI1NCAtMzMuNTkyKSIgZmlsbD0iIzIwMjAyNyIvPjxwYXRoIGQ9Ik0xMTYuMjU3LDQxLjU4NGEyLjg3OCwyLjg3OCwwLDAsMS0xLjA5LS4yLDIuMjQ3LDIuMjQ3LDAsMCwxLS44MjgtLjU1OSwyLjQyNywyLjQyNywwLDAsMS0uNTE3LS44NzksMy43NzgsMy43NzgsMCwwLDEsMC0yLjMxNywyLjQ2MiwyLjQ2MiwwLDAsMSwuNTE3LS44NzksMi4zLDIuMywwLDAsMSwuODI4LS41NTksMy4xLDMuMSwwLDAsMSwyLjE3NywwLDIuMzA3LDIuMzA3LDAsMCwxLC44MjguNTU5LDIuNTI0LDIuNTI0LDAsMCwxLC41MTcuODc5LDMuODE5LDMuODE5LDAsMCwxLDAsMi4zMTcsMi40ODIsMi40ODIsMCwwLDEtLjUxNy44NzksMi4yNTUsMi4yNTUsMCwwLDEtLjgyOC41NTlBMi44NzgsMi44NzgsMCwwLDEsMTE2LjI1Nyw0MS41ODRabTAtMS4wMTRhMS4xODYsMS4xODYsMCwwLDAsLjktLjM0NiwxLjQyMSwxLjQyMSwwLDAsMCwuMzMxLTEuMDJ2LS44MjhhMS40MTUsMS40MTUsMCwwLDAtLjMzMS0xLjAxOCwxLjMzOSwxLjMzOSwwLDAsMC0xLjgsMCwxLjQyNiwxLjQyNiwwLDAsMC0uMzMxLDEuMDE4VjM5LjJhMS40MywxLjQzLDAsMCwwLC4zMzEsMS4wMiwxLjE5MiwxLjE5MiwwLDAsMCwuOS4zNDhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTUuMjc4IC0zMy42KSIgZmlsbD0iIzIwMjAyNyIvPjxwYXRoIGQ9Ik0xNTIuNDgyLDU1Ljc4MmExLjA2MSwxLjA2MSwwLDAsMS0uNzY2LS4yMjguNzU5Ljc1OSwwLDAsMS0uMjI4LS41NTl2LS4zMWEuNzY4Ljc2OCwwLDAsMSwuMjI4LS41NTksMS40LDEuNCwwLDAsMSwxLjUzMSwwLC43NjguNzY4LDAsMCwxLC4yMjguNTU5VjU1YS43NTkuNzU5LDAsMCwxLS4yMjguNTU5QTEuMDYxLDEuMDYxLDAsMCwxLDE1Mi40ODIsNTUuNzgyWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNS4yOTYgLTQ3Ljc5OCkiIGZpbGw9IiMyMDIwMjciLz48cGF0aCBkPSJNMTc1LjE5LDMzLjdsMy40LTkuMjloMS4xOWwtMy40LDkuMjlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTQ0LjA5MyAtMjQuNDEpIiBmaWxsPSIjMjAyMDI3Ii8+PHBhdGggZD0iTTIwNS41NCwzNy4yNTRsMy4yNDgtMS43NTl2LS4wNzRsLTMuMjQ4LTEuNzU5VjMyLjRsNC40NCwyLjQzM3YxLjI0MWwtNC40NCwyLjQ1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE2OC4xNjQgLTMwLjc0NykiIGZpbGw9IiMyMDIwMjciLz48L2c+PC9zdmc+Cg==',
				cursor: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAABmJLR0QA/wD/AP+gvaeTAAAAfElEQVQYlXWPMQ6CUBAFZ6G28ABSUdjpWTwneAATW2rvQaKBgg+7P3nWms+084p5AKSkJkK9u0Z3jRG6r6taAEtJTV3zAo788smZi0Wol7hRwIzO3DUDh9IAmCrAdiSAVWY8d63xsG3T2YyhEPnOmSt/N2d3TRHqlkUngC+aF0VXShCb0gAAAABJRU5ErkJggg=='
			}
    };

    this.objectParams = this.queryParamsInUrlScript() || {theme: 'dark'};

    this.styles = `
      .ltco_dev {
        position: absolute;
        bottom: 10px;
        left: 50%;
        opacity: .04;
        z-index: 9999;
        transform: translateX(-50%);
        transition: all 0.2s ease-in-out;
      }

      .ltco_dev.active,
      .ltco_dev:active {
        opacity: 1;
      }

      .ltco_dev,
      .ltco_dev:active {
        cursor: url("${this.themeSwitch[this.objectParams.theme].cursor}"), auto;
      }
    `;

		this.ltcoLogoImage = this.createLogo();

    this.events = ['touchstart', 'click'];

    this.activeClass = 'active';

    this.activeSignature = this.activeSignature.bind(this);

    return this.init();
  }

  queryParamsInUrlScript() {
    const scriptTag = [...document.getElementsByTagName('script')].filter(({src}) => src.includes('signature-ltco'));

		const scriptHrefParams = scriptTag[0].src.slice(scriptTag[0].src.indexOf('?') + 1).split('&');

		const objectsParams = scriptHrefParams.map(param => {
			const [keyParam, valueParam] = param.split('=')

			return { [keyParam]: valueParam }
		});

    return Object.assign({}, ...objectsParams);
  }

	createLogo() {
    const ltcoLogoImage = document.createElement('img');

		ltcoLogoImage.src = this.themeSwitch[this.objectParams.theme].src;
		ltcoLogoImage.height = 18;
		ltcoLogoImage.alt = 'ltco./> - ltco.com.br';
    ltcoLogoImage.classList.add('ltco_dev');

    return ltcoLogoImage;
	}

	insertLogoImage() {
    const appendLogoImage = document.getElementById('root') || document.body;

    appendLogoImage.append(this.ltcoLogoImage);
  }

  appendStyle() {
    const css = document.createElement('style');

    if (css.styleSheet) css.styleSheet.cssText = this.styles;
    else css.appendChild(document.createTextNode(this.styles));

    document.getElementsByTagName('head')[0].appendChild(css);
  }

	outsideClick(element, callback) {
    const html = document.documentElement;
    const isActive = 'data-is-active';

		const handleOutsideClick = event => {

			if (!element.contains(event.target)) {
				element.removeAttribute(isActive);

				this.events.forEach(userEvent => {
					html.removeEventListener(userEvent, handleOutsideClick);
        });

        callback();
			}
		}

		if (!element.hasAttribute(isActive)) {
			this.events.forEach(userEvent => {
				setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));
			});

			element.setAttribute(isActive, '');
		}
	}

  activeSignature(event) {
		event.preventDefault();

		const element = event.currentTarget;

    element.classList.add(this.activeClass);

    setTimeout(() => {
      window.open('https://ltco.com.br', '_blank');
    }, 1000);

    this.outsideClick(element, () => {
      element.classList.remove(this.activeClass);
    });
  }

  addSignatureEvent() {
		this.events.forEach(userEvent => {
			this.ltcoLogoImage.addEventListener(userEvent, this.activeSignature);
    });
  }

  init() {
    this.appendStyle();
    this.insertLogoImage();
    this.addSignatureEvent();
  }
}

new SignatureLTCO();
