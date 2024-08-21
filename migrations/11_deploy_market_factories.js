const FixedProductMarketMakerFactory = artifacts.require('FixedProductMarketMakerFactory')
const FPMMDeterministicFactory = artifacts.require('FPMMDeterministicFactory')

module.exports = function (deployer) {
    deployer.deploy(FixedProductMarketMakerFactory)
    deployer.deploy(FPMMDeterministicFactory)
}