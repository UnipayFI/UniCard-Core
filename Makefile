include .env

export $(shell sed 's/=.*//' .env)

add_controller:
	forge clean && forge script script/UniCardRegistry.s.sol:AddUniCardRegistryControllerScript --rpc-url $(RPC_URL) --broadcast

deploy:
	forge clean && forge script script/UniCardRegistry.s.sol:DeployUniCardRegistryScript --rpc-url $(RPC_URL) --broadcast
