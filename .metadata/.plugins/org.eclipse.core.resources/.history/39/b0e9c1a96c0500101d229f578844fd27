package com.wallet.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wallet.entity.Wallet;
import com.wallet.repository.WalletRepository;

@Service
public class WalletService {
	
	@Autowired
	private WalletRepository walletRepository;
	
	
	//Adding the Money
	public double addMoney(String username, double amount) {
		Wallet wallet = walletRepository.findByUsername(username).orElse(new Wallet(username, 0));
		wallet.setBalance(wallet.getBalance()+ amount);
		walletRepository.save(wallet);
		return wallet.getBalance();
	}

	//For get the Balance
	public double getMoney(String username) {
		return walletRepository.findByUsername(username)
				.map(Wallet::getBalance).orElseThrow(()->new RuntimeException("User not Found"));
	}
	
	//for Withdrawing the Money
	public double withdrawMoney(String username, double amount) {
		Wallet wallet = walletRepository.findByUsername(username)
				.orElseThrow(()-> new RuntimeException("user Not Found"));
		if(wallet.getBalance()<amount) throw new RuntimeException("Insufficient Balance");
		wallet.setBalance(wallet.getBalance()-amount);
		walletRepository.save(wallet);
		return wallet.getBalance();
	}

}
