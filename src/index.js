(function(global, $) {
  const Greetr = function(firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language);
  };

  const supportedLanguages = ['en', 'es'];
  const greetings = {
    en: 'Hello',
    es: 'Hallo'
  };
  const formalGreetings = {
    en: 'Greetings',
    es: 'Saludos'
  };
  const logMessages = {
    en: 'Logged In',
    es: 'Inicio sesion'
  };

  Greetr.prototype = {
    fullName: function fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    validate: function validate() {
      if (supportedLanguages.indexOf(this.language) === -1) {
        throw new Error('Unsupported language');
      }
    },
    greeting: function greeting() {
      return `${greetings[this.language]} ${this.firstName} !`;
    },
    formalGreeting: function formalGreeting() {
      return `${formalGreetings[this.language]} ${this.fullName()}`;
    },
    greet: function greet(formal) {
      let message;
      if (formal) {
        message = this.formalGreeting();
      } else {
        message = this.greeting();
      }
      if (console) {
        console.log(message);
      }

      // 'this' refers to the calling object at execution time makes the method chainable
      return this;
    },
    log: function log() {
      if (console) {
        console.log(`${logMessages[this.language]} :: ${this.fullName()}`);
      }

      return this;
    },
    setLang: function setLang(newLanguage) {
      this.language = newLanguage;
      this.validate();

      return this;
    },
    HTMLGreeting: function HTMLGreeting(selector, formal) {
      let message;
      if (formal) {
        message = this.formalGreeting();
      } else {
        message = this.greeting();
      }

      $(selector).html(message);

      return this;
    }
  };

  Greetr.init = function(firstName, lastName, language) {
    const self = this;
    self.firstName = firstName || 'Default First Name';
    self.lastName = lastName || 'Default Last Name';
    self.language = language || 'en';

    console.log(`First Name: ${firstName} | Last Name: ${lastName} | Language: ${language}`);
  };

  Greetr.init.prototype = Greetr.prototype;

  global.Greetr = global.G$ = Greetr;
})(window, jQuery);
