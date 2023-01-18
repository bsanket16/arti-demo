import { useState, useEffect } from "react"

export const Header = () => {

  const [walletAddress, setWalletAddress] = useState("")

  useEffect(() => {
    getCurrentWalletConnected()
    addWalletListener()
  }, [walletAddress])

  const connectWallet = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      // MetaMask present
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        })

        // console.log(accounts)
        setWalletAddress(accounts[0])
      } catch (err) {
        // plus icon is created with two boxes
        // when clicked in the center it call this function twice
        // resulting in error - request already pending
        // if we merge those two boxes into one shape, it will be fixed
        console.log(err.message)
      }
    } else {
      // MetaMask absent
      // setMessage("Please install MetaMask")
    }
  }

  // Update after page load
  const getCurrentWalletConnected = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        })

        if (accounts.length > 0) {
          // console.log(accounts)
          setWalletAddress(accounts[0])
        } else {
          // setMessage("Connect to MetaMask using the above button")
        }
      } catch (err) {
        console.error(err.message)
      }
    } else {
      // MetaMask absent
      // setMessage("Please install MetaMask")
    }
  }

  // Listening to account changes on metamask
  const addWalletListener = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      window.ethereum.on("accountsChanged", (accounts) => {
        // console.log(accounts)
        setWalletAddress(accounts[0])
      })
    } else {
      setWalletAddress("")
      // setMessage("Please install MetaMask")
    }
  }

  return (
    <div className="header">
          <button onClick={connectWallet} className="btn-stroke">
      {walletAddress && walletAddress.length > 0
        ? `${walletAddress.substring(
            0,
            14
          )}...${walletAddress.substring(38)}`
        : `Connect`}
    </button>
    </div>
  )
}