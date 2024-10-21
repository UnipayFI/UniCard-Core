include .env

export $(shell sed 's/=.*//' .env)

unittest:
	forge clean && forge test --via-ir

add_controller:
	forge clean && forge script script/UniCardRegistry.s.sol:AddUniCardRegistryControllerScript --rpc-url $(RPC_URL) --broadcast

add_vault:
	forge clean && forge script script/UniCardRegistry.s.sol:AddUniCardRegistryVaultScript --rpc-url $(RPC_URL) --broadcast

deploy:
	forge clean && forge script script/UniCardRegistry.s.sol:DeployUniCardRegistryScript --rpc-url $(RPC_URL) --broadcast

open_card_request:
	forge clean && forge script script/UniCardRegistry.s.sol:OpenUniCardRequestScript --rpc-url $(RPC_URL) --broadcast