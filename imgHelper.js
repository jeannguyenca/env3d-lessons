const imgDir = "./lessons/img/";

exports.getBlock = function(block) {
  return `<img src="${imgDir}${block}" alt="aBlock"/>`;
}