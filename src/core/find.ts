
// @require ./variables.ts

function find ( selector: string, context: Ele ): ArrayLike<Element> {
  return !selector || ( !isDocument ( context ) && !isElement ( context ) )
           ? []
           : classRe.test ( selector )
             ? context.getElementsByClassName ( selector.slice ( 1 ) )
             : tagRe.test ( selector )
               ? context.getElementsByTagName ( selector )
               : [':input', ':button'].indexOf(selector) !== -1
                ? context.querySelectorAll(selector.substring(1))
                : context.querySelectorAll ( selector.replace(/(\[[^=]+=)([^"\]]+)(])/, '$1"$2"$3') ); // add quote around attr value

}
