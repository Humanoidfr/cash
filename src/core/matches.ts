
// @require ./cash.ts

function matches ( ele: any, selector: string ): boolean {

  const matches = ele && ( ele['matches'] || ele['webkitMatchesSelector'] || ele['msMatchesSelector'] );

  if (selector === ':visible') {
    return !!( ele.offsetWidth || ele.offsetHeight || ele.getClientRects().length );
  } else if (selector === ':hidden') {
    return !( ele.offsetWidth || ele.offsetHeight || ele.getClientRects().length );
  }

  return !!matches && !!selector && matches.call ( ele, selector );

}
