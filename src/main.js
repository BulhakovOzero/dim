/* eslint-disable */

const stepSlider = document.querySelector('.splide')

const slider = new Splide(stepSlider, {
  type: 'fade',
  pagination: false,
  drag: false,
  keyboard: false,
  autoHeight: true,
}).mount();

const steps = document.querySelectorAll('.step-slide');
const radioButtons = document.querySelectorAll('.radio-wrapper');
const splideSlides = document.querySelectorAll('.splide__slide');
const splideNext = document.querySelector('.splide__arrow--next');
const splidePrev = document.querySelector('.splide__arrow--prev');

const formsObject = {
  "Request a proposal": `<div>
      <div class="form-title-wr">
        <h2 class="text-size-2em">Request a proposal</h2>
        <h2 class="text-size-1_25rem is-regular is--opacity60">step 3/3</h2>
      </div>
      <div class="form-content-wr">
        <div class="c-form_field is-autocompleted">
          <input
            class="form-text-field email-autocomplete w-input"
            maxlength="256"
            name="email-2"
            data-name="Email 2"
            placeholder="Email"
            type="email"
          />
          <div class="c-error-message"><div>wrong mail type</div></div>
        </div>
        <div class="form-adress-wr">
          <div class="c-form_field">
            <label for="Property-address" class="c-text-2 cc-field-header"
              >Property address</label
            ><input
              class="form-text-field w-input"
              autocomplete="street-address"
              maxlength="256"
              name="Property-address"
              data-name="Property address"
              ms-code-input="address"
              placeholder=""
              type="text"
              id="Property-address"
              required=""
            />
          </div>
          <div class="form-content-wr-2col">
            <div class="c-form_field">
              <label for="Lot-ZIP-2" class="c-text-2 cc-field-header"
                >ZIP code</label
              ><input
                class="form-text-field w-input"
                autocomplete="postal-code"
                maxlength="256"
                name="Lot-ZIP-2"
                data-name="Lot ZIP 2"
                ms-code-input="postal-code"
                placeholder=""
                type="text"
                id="Lot-ZIP-2"
                required=""
              />
            </div>
            <div class="c-form_field">
              <label for="City-2" class="c-text-2 cc-field-header"
                ><strong>City</strong></label
              ><input
                class="form-text-field w-input"
                maxlength="256"
                name="City-2"
                data-name="City 2"
                ms-code-input="city"
                placeholder=""
                type="text"
                id="City-2"
                required=""
              />
            </div>
          </div>
          <div class="form-content-wr-2col">
            <div class="c-form_field">
              <label for="Region" class="c-text-2 cc-field-header">Region</label
              ><input
                class="form-text-field w-input"
                maxlength="256"
                name="Region-2"
                data-name="Region 2"
                ms-code-input="region"
                placeholder=""
                type="text"
                id="Region"
                required=""
              />
            </div>
            <div class="c-form_field">
              <label for="Country-2" class="c-text-2 cc-field-header"
                >Country</label
              ><input
                class="form-text-field w-input"
                maxlength="256"
                name="Country-2"
                data-name="Country 2"
                ms-code-input="country"
                placeholder=""
                type="text"
                id="Country-2"
                required=""
              />
            </div>
          </div>
        </div>
        <div class="c-form_field">
          <label for="Project-name-2" class="c-text-2 cc-field-header"
            >Project name (optional)</label
          ><input
            class="form-text-field w-input"
            maxlength="256"
            name="Project-name-2"
            data-name="Project Name 2"
            placeholder=""
            type="text"
            id="Project-name-2"
          />
        </div>
        <div class="c-form_field">
          <label for="Details-optional-2" class="c-text-2 cc-field-header"
            >Details (optional)</label
          ><textarea
            placeholder=""
            maxlength="5000"
            id="Details-optional-2"
            name="Details-optional-2"
            data-name="Details Optional 2"
            class="form-text-field w-input"
          ></textarea>
        </div>
      </div>
    </div>`,
  "Monthly Parking": `<div>
      <div class="form-title-wr">
        <h2 class="text-size-2em">Monthly parking</h2>
        <h2 class="text-size-1_25rem is-regular is--opacity60">step 3/3</h2>
      </div>
      <div class="form-content-wr">
        <div class="c-form_field is-autocompleted">
          <input
            class="form-text-field email-autocomplete w-input"
            maxlength="256"
            name="email-2"
            data-name="Email 2"
            placeholder="Email"
            type="email"
          />
          <div class="c-error-message"><div>wrong mail type</div></div>
        </div>
        <div class="form-adress-wr">
          <div class="c-form_field">
            <label for="Lot-address-3" class="c-text-2 cc-field-header"
              >Lot address</label
            ><input
              class="form-text-field w-input"
              autocomplete="street-address"
              maxlength="256"
              name="Lot-address-3"
              data-name="Lot Address 3"
              placeholder=""
              type="text"
              id="Lot-address-3"
              required=""
            />
          </div>
          <div class="form-content-wr-2col">
            <div class="c-form_field">
              <label for="Lot-ZIP-2" class="c-text-2 cc-field-header"
                >ZIP code</label
              ><input
                class="form-text-field w-input"
                autocomplete="postal-code"
                maxlength="256"
                name="Lot-ZIP-2"
                data-name="Lot ZIP 2"
                placeholder=""
                type="text"
                id="Lot-ZIP-2"
                required=""
              />
            </div>
            <div class="c-form_field">
              <label for="City-2" class="c-text-2 cc-field-header"
                ><strong>City</strong></label
              ><input
                class="form-text-field w-input"
                maxlength="256"
                name="City-2"
                data-name="City 2"
                placeholder=""
                type="text"
                id="City-2"
                required=""
              />
            </div>
          </div>
          <div class="form-content-wr-2col">
            <div class="c-form_field">
              <label for="Region" class="c-text-2 cc-field-header">Region</label
              ><input
                class="form-text-field w-input"
                maxlength="256"
                name="Region-2"
                data-name="Region 2"
                placeholder=""
                type="text"
                id="Region"
                required=""
              />
            </div>
            <div class="c-form_field">
              <label for="Country-2" class="c-text-2 cc-field-header"
                >Country</label
              ><input
                class="form-text-field w-input"
                autocomplete="postal-code"
                maxlength="256"
                name="Country-2"
                data-name="Country 2"
                placeholder=""
                type="text"
                id="Country-2"
                required=""
              />
            </div>
          </div>
        </div>
        <div class="c-form_field">
          <label for="Landmark-Intersection" class="c-text-2 cc-field-header"
            >Landmark/Intersection</label
          ><input
            class="form-text-field w-input"
            maxlength="256"
            name="Landmark-Intersection"
            data-name="Landmark/Intersection"
            placeholder=""
            type="text"
            id="Landmark-Intersection"
            required=""
          />
        </div>
        <div class="select-wrapper">
          <label for="Access-Type" class="c-text-2 cc-field-header"
            >Access Type</label
          ><select
            id="Access-Type"
            name="Access-Type"
            data-name="Access Type"
            required=""
            class="select-field cc-select w-select"
          >
            <option value="24/7">24/7</option>
            <option value="Limited">Limited</option>
          </select>
        </div>
        <div class="c-form_field">
          <label for="of-spaces" class="c-text-2 cc-field-header"
            ># of spaces</label
          ><input
            class="form-text-field w-input"
            maxlength="256"
            name="of-spaces"
            data-name="# of spaces"
            min="0"
            placeholder=""
            type="number"
            id="of-spaces"
            required=""
          />
        </div>
        <div class="c-form_field">
          <label for="Details-optional-2" class="c-text-2 cc-field-header"
            >Details (optional)</label
          ><textarea
            placeholder=""
            maxlength="5000"
            id="Details-optional-2"
            name="Details-optional-2"
            data-name="Details Optional 2"
            class="form-text-field w-input"
          ></textarea>
        </div>
      </div>
    </div>`,
  "Appeal a Violation": `<div>
      <div class="form-title-wr">
        <h2 class="text-size-2em">Appeal a violation</h2>
        <h2 class="text-size-1_25rem is-regular is--opacity60">step 3/3</h2>
      </div>
      <div class="form-content-wr">
        <div class="c-form_field is-autocompleted">
          <input
            class="form-text-field email-autocomplete w-input"
            maxlength="256"
            name="email-2"
            data-name="Email 2"
            placeholder="Email"
            type="email"
          />
          <div class="c-error-message"><div>wrong mail type</div></div>
        </div>
        <div class="c-form_field">
          <label for="Violation" class="c-text-2 cc-field-header"
            >Violation #</label
          ><input
            class="form-text-field w-input"
            max="999999999999"
            maxlength="256"
            name="Violation"
            data-name="Violation #"
            min="000000000001"
            placeholder=""
            type="text"
            id="Violation"
            required=""
          />
        </div>
        <div class="c-form_field">
          <label for="Plate" class="c-text-2 cc-field-header">Plate #</label
          ><input
            class="form-text-field w-input"
            max="999999999999"
            maxlength="256"
            name="Plate"
            data-name="Plate #"
            min="000000000001"
            placeholder=""
            type="text"
            id="Plate"
            required=""
          />
        </div>
        <div class="c-form_field">
          <label for="Details-optional-2" class="c-text-2 cc-field-header"
            >Details (optional)</label
          ><textarea
            placeholder=""
            maxlength="5000"
            id="Details-optional-2"
            name="Details-optional-2"
            data-name="Details Optional 2"
            class="form-text-field w-input"
          ></textarea>
        </div>
        <div class="c-form_field is--attach-field">
          <div class="icon-1-25rem w-embed">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="19"
                height="19"
                rx="5.5"
                stroke="#292B2E"
              ></rect>
              <rect x="5" y="9" width="10" height="2" fill="#292B2E"></rect>
              <rect
                x="11"
                y="5"
                width="10"
                height="2"
                transform="rotate(90 11 5)"
                fill="#292B2E"
              ></rect>
            </svg>
          </div>
          <label for="Details-optional-3" class="c-text-2 cc-field-attach"
            >Attach an image</label
          >
        </div>
      </div>
    </div>`,
  "Rent Space": `<div>
      <div class="form-title-wr">
        <h2 class="text-size-2em">Rent space</h2>
        <h2 class="text-size-1_25rem is-regular is--opacity60">step 3/3</h2>
      </div>
      <div class="form-content-wr">
        <div class="c-form_field is-autocompleted">
          <input
            class="form-text-field email-autocomplete w-input"
            maxlength="256"
            name="email-2"
            data-name="Email 2"
            placeholder="Email"
            type="email"
          />
          <div class="c-error-message"><div>wrong mail type</div></div>
        </div>
        <div class="form-adress-wr">
          <div class="c-form_field">
            <label for="Lot-address-2" class="c-text-2 cc-field-header"
              >Lot address</label
            ><input
              class="form-text-field w-input"
              autocomplete="street-address"
              maxlength="256"
              name="Lot-address"
              data-name="Lot address"
              placeholder=""
              type="text"
              id="Lot-address-2"
              required=""
            />
          </div>
          <div class="form-content-wr-2col">
            <div class="c-form_field">
              <label for="Lot-ZIP" class="c-text-2 cc-field-header"
                >ZIP code</label
              ><input
                class="form-text-field w-input"
                autocomplete="postal-code"
                maxlength="256"
                name="Lot-ZIP"
                data-name="Lot ZIP"
                placeholder=""
                type="text"
                id="Lot-ZIP"
                required=""
              />
            </div>
            <div class="c-form_field">
              <label for="City" class="c-text-2 cc-field-header"
                ><strong>City</strong></label
              ><input
                class="form-text-field w-input"
                maxlength="256"
                name="City"
                data-name="City"
                placeholder=""
                type="text"
                id="City"
                required=""
              />
            </div>
          </div>
          <div class="form-content-wr-2col">
            <div class="c-form_field">
              <label for="Region" class="c-text-2 cc-field-header">Region</label
              ><input
                class="form-text-field w-input"
                maxlength="256"
                name="Region-2"
                data-name="Region 2"
                placeholder=""
                type="text"
                id="Region"
                required=""
              />
            </div>
            <div class="c-form_field">
              <label for="Country" class="c-text-2 cc-field-header"
                >Country</label
              ><input
                class="form-text-field w-input"
                autocomplete="postal-code"
                maxlength="256"
                name="Country"
                data-name="Country"
                placeholder=""
                type="text"
                id="Country"
                required=""
              />
            </div>
          </div>
        </div>
        <div class="c-form_field">
          <label for="Landmark-Intersection-3" class="c-text-2 cc-field-header"
            >Landmark/Intersection</label
          ><input
            class="form-text-field w-input"
            maxlength="256"
            name="Landmark-Intersection-3"
            data-name="Landmark Intersection 3"
            placeholder=""
            type="text"
            id="Landmark-Intersection-3"
            required=""
          />
        </div>
        <div class="form-content-wr-2col">
          <div class="c-form_field">
            <label for="Event-start" class="c-text-2 cc-field-header"
              >Event start</label
            ><input
              type="datetime-local"
              name="Event start"
              class="form-text-field"
              value="2024-01-01T12:00"
            />
          </div>
          <div class="c-form_field">
            <label for="Event-End" class="c-text-2 cc-field-header"
              >Event End</label
            ><input
              type="datetime-local"
              name="Event End"
              class="form-text-field"
              value="2024-01-01T13:00"
            />
          </div>
        </div>
        <div class="c-form_field">
          <label for="Event-footprint" class="c-text-2 cc-field-header"
            >Event footprint</label
          ><input
            class="form-text-field w-input"
            maxlength="256"
            name="Event-footprint"
            data-name="Event footprint"
            placeholder=""
            type="text"
            id="Event-footprint"
            required=""
          />
        </div>
        <div class="c-form_field">
          <label for="Details-optional" class="c-text-2 cc-field-header"
            >Details (optional)</label
          ><textarea
            placeholder=""
            maxlength="5000"
            id="Details-optional"
            name="Details-optional"
            data-name="Details (optional)"
            class="form-text-field w-input"
          ></textarea>
        </div>
      </div>
    </div>`,
  "Something Else": `<div>
      <div class="form-title-wr">
        <h2 class="text-size-2em">Ask us</h2>
        <h2 class="text-size-1_25rem is-regular is--opacity60">step 3/3</h2>
      </div>
      <div class="form-content-wr">
        <div class="c-form_field">
          <div class="c-form_field is-autocompleted">
            <input
              class="form-text-field email-autocomplete w-input"
              maxlength="256"
              name="email-2"
              data-name="Email 2"
              placeholder="Email"
              type="email"
            />
            <div class="c-error-message"><div>wrong mail type</div></div>
          </div>
          <label for="Your-message" class="c-text-2 cc-field-header"
            >Your message</label
          ><textarea
            required=""
            placeholder=""
            maxlength="5000"
            id="Your-message"
            name="Your-message"
            data-name="Your message"
            class="form-text-field w-input"
          ></textarea>
        </div>
      </div>
    </div>`
}

const firstSlide = splideSlides[0];
if (firstSlide.classList.contains('is-active')) {

  radioButtons.forEach((radioButton) => {
    const radioInput = radioButton.querySelector('input');
    const radioValue = radioInput.value;

    radioInput.addEventListener('change', () => {
      const form = formsObject[radioValue];
      const lastSlide = splideSlides[splideSlides.length - 1];

      lastSlide.innerHTML = form;
      checkRadioChecked()
    });
  });
}

function checkRadioChecked() {
  radioButtons.forEach((radioButton) => {
    const radioInput = radioButton.querySelector('input');

    if (radioInput.checked) {
      const radioValue = radioInput.value;
      enableButton(splideNext)
    }
  });
}

function disableButton(button) {
  button.classList.add('is--disabled');
}

function enableButton(button) {
  button.classList.remove('is--disabled');
}

slider.on('moved', () => {
  const activeSlide = splideSlides[slider.index];
  const lastSlide = splideSlides[splideSlides.length - 1];

  disableButton(splideNext);

  const requiredFields = activeSlide.querySelectorAll('[required]');
  const requiredFieldthLength = requiredFields.length;

  if (requiredFields > 0) {
    requiredFields.forEach((requiredField) => {
      requiredField.addEventListener('input', () => {
        const filledFields = activeSlide.querySelectorAll('[required].cc-error');
        const filledFieldsLength = filledFields.length;

        if (filledFieldsLength === requiredFieldthLength) {
          disableButton(splideNext);
        } else {
          enableButton(splideNext);
        }
      });
    });
  } else {
    enableButton(splideNext);
  }


  if (activeSlide === splideSlides[0]) {
    checkRadioChecked()
  }
});
