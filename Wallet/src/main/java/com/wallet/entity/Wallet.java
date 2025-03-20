package com.wallet.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

import jakarta.persistence.Id;

@Entity
public class Wallet {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
    private Long walletId;

	@Column(name = "Username", length = 20)
    private String username;

	@Column(name = "Balance")
    private double balance;

	public Wallet(Long walletId, String userName, double balance) {
		super();
		this.walletId = walletId;
		this.username = userName;
		this.balance = balance;
	}

	public Wallet(String username2, int i) {
		// TODO Auto-generated constructor stub
	}

	public String getUserName() {
		return username;
	}

	public void setUserName(String userName) {
		this.username = userName;
	}

	public double getBalance() {
		return balance;
	}

	public void setBalance(double balance) {
		this.balance = balance;
	}

	public Long getWalletId() {
		return walletId;
	}
	
	public Wallet() {
		
	}
	
	
}
