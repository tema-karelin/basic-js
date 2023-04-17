const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // console.log('domains: ', domains);
  let domainsObj = {};
  domains.forEach((el, i) => {
    const domainParts = el.split('.').reverse();
    // console.log('domainParts: ', domainParts);
    domainParts.reduce((domainPart, nextDomainPart) => {
      const subDomain = domainPart + '.' + nextDomainPart;
      // console.log('reduce subDomain: ', subDomain);
      if (domainsObj.hasOwnProperty(subDomain)) {
        domainsObj[subDomain] += 1;
      } else {
        domainsObj[subDomain] = 1;
      };
      return subDomain;
    }, '')
  }
  )

  // console.log('domainsObj: ', domainsObj);
  return domainsObj
}

module.exports = {
  getDNSStats
};
