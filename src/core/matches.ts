
// @require ./cash.ts

function matches ( ele: any, selector: string ): boolean {

  const matches = ele && ( ele['matches'] || ele['webkitMatchesSelector'] || ele['msMatchesSelector'] );
  const selectors = {
    ':visible': ':not([style="display:none"])',
    ':hidden': '[style="display:none"]',
  };
  return !!matches && !!selector && matches.call ( ele, selectors[selector] ? selectors[selector] : selector );

}
