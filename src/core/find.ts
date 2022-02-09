
// @require ./variables.ts

const input = {
  ':input': 'input, textarea, select, button',
  ':button': 'button',
  ':visible': ':not([style="display:none"])',
  ':hidden': '[style="display:none"]',
};

function find ( selector: string, context: Ele ): ArrayLike<Element> {
  return !selector || ( !isDocument ( context ) && !isElement ( context ) )
           ? []
           : classRe.test ( selector )
             ? context.getElementsByClassName ( selector.slice ( 1 ) )
             : tagRe.test ( selector )
               ? context.getElementsByTagName ( selector )
               : input[selector]
                ? context.querySelectorAll(input[selector])
                : context.querySelectorAll ( selector.replace(/(\[[^=]+=)([^"\]]+)(])/, '$1"$2"$3') ); // add quote around attr value

}
