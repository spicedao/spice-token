import { Signer } from "ethers";
import { BigNumber } from "ethers/utils";
import { Address } from "../types";
import { SpiceToken, MerkleDistributor, Vesting } from "../contracts";

import { SpiceTokenFactory } from "../../typechain/SpiceTokenFactory";
import { MerkleDistributorFactory } from "../../typechain/MerkleDistributorFactory";
import { VestingFactory } from "../../typechain/VestingFactory";

export default class DeployToken {
  private _deployerSigner: Signer;

  constructor(deployerSigner: Signer) {
    this._deployerSigner = deployerSigner;
  }

  public async deploySpiceToken(initialAccount: Address): Promise<SpiceToken> {
    return await new SpiceTokenFactory(this._deployerSigner).deploy(initialAccount);
  }

  public async deployMerkleDistributor(token: Address, merkleRoot: string): Promise<MerkleDistributor> {
    return await new MerkleDistributorFactory(this._deployerSigner).deploy(token, merkleRoot);
  }

  public async deployVesting(
    token: Address,
    recipient: Address,
    vestingAmount: BigNumber,
    vestingBegin: BigNumber,
    vestingCliff: BigNumber,
    vestingEnd: BigNumber
  ): Promise<Vesting> {
    return await new VestingFactory(this._deployerSigner).deploy(
      token,
      recipient,
      vestingAmount,
      vestingBegin,
      vestingCliff,
      vestingEnd
    );
  }
}
