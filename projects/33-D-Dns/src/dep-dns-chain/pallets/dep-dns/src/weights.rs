
//! Autogenerated weights for pallet_dep_dns
//!
//! THIS FILE WAS AUTO-GENERATED USING THE SUBSTRATE BENCHMARK CLI VERSION 4.0.0-dev
//! DATE: 2023-06-28, STEPS: `50`, REPEAT: `20`, LOW RANGE: `[]`, HIGH RANGE: `[]`
//! WORST CASE MAP SIZE: `1000000`
//! HOSTNAME: `yubo-X400`, CPU: `AMD Ryzen 7 PRO 4750G with Radeon Graphics`
//! EXECUTION: Some(Wasm), WASM-EXECUTION: Compiled, CHAIN: Some("dev"), DB CACHE: 1024

// Executed Command:
// ./target/release/d-dns
// benchmark
// pallet
// --chain
// dev
// --pallet
// pallet_dep_dns
// --extrinsic=*
// --steps=50
// --repeat=20
// --execution=wasm
// --wasm-execution=compiled
// --output
// pallets/dep-dns/src/weights.rs
// --template=./.maintain/frame-weight-template.hbs

#![cfg_attr(rustfmt, rustfmt_skip)]
#![allow(unused_parens)]
#![allow(unused_imports)]
#![allow(missing_docs)]

use frame_support::{traits::Get, weights::{Weight, constants::RocksDbWeight}};
use core::marker::PhantomData;

/// Weight functions needed for pallet_dep_dns.
pub trait WeightInfo {
	fn register_domain() -> Weight;
	fn renew_registration() -> Weight;
	fn add_update_dns_record() -> Weight;
	fn cancel_domain() -> Weight;
}

/// Weights for pallet_dep_dns using the Substrate node and recommended hardware.
pub struct SubstrateWeight<T>(PhantomData<T>);
impl<T: frame_system::Config> WeightInfo for SubstrateWeight<T> {
	/// Storage: DepDns DomainRegistry (r:1 w:1)
	/// Proof Skipped: DepDns DomainRegistry (max_values: None, max_size: None, mode: Measured)
	fn register_domain() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `3`
		//  Estimated: `3468`
		// Minimum execution time: 40_907_000 picoseconds.
		Weight::from_parts(120_586_000, 3468)
			.saturating_add(T::DbWeight::get().reads(1_u64))
			.saturating_add(T::DbWeight::get().writes(1_u64))
	}
	/// Storage: DepDns DomainRegistry (r:1 w:1)
	/// Proof Skipped: DepDns DomainRegistry (max_values: None, max_size: None, mode: Measured)
	fn renew_registration() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `99`
		//  Estimated: `3564`
		// Minimum execution time: 39_574_000 picoseconds.
		Weight::from_parts(40_095_000, 3564)
			.saturating_add(T::DbWeight::get().reads(1_u64))
			.saturating_add(T::DbWeight::get().writes(1_u64))
	}
	/// Storage: DepDns DomainRegistry (r:1 w:0)
	/// Proof Skipped: DepDns DomainRegistry (max_values: None, max_size: None, mode: Measured)
	/// Storage: DepDns ARecords (r:0 w:1)
	/// Proof Skipped: DepDns ARecords (max_values: None, max_size: None, mode: Measured)
	fn add_update_dns_record() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `99`
		//  Estimated: `3564`
		// Minimum execution time: 20_900_000 picoseconds.
		Weight::from_parts(21_139_000, 3564)
			.saturating_add(T::DbWeight::get().reads(1_u64))
			.saturating_add(T::DbWeight::get().writes(1_u64))
	}
	/// Storage: DepDns DomainRegistry (r:1 w:1)
	/// Proof Skipped: DepDns DomainRegistry (max_values: None, max_size: None, mode: Measured)
	/// Storage: DepDns MxRecords (r:0 w:1)
	/// Proof Skipped: DepDns MxRecords (max_values: None, max_size: None, mode: Measured)
	/// Storage: DepDns ARecords (r:0 w:1)
	/// Proof Skipped: DepDns ARecords (max_values: None, max_size: None, mode: Measured)
	/// Storage: DepDns AAAARecords (r:0 w:1)
	/// Proof Skipped: DepDns AAAARecords (max_values: None, max_size: None, mode: Measured)
	/// Storage: DepDns PtrRecords (r:0 w:1)
	/// Proof Skipped: DepDns PtrRecords (max_values: None, max_size: None, mode: Measured)
	/// Storage: DepDns CnameRecords (r:0 w:1)
	/// Proof Skipped: DepDns CnameRecords (max_values: None, max_size: None, mode: Measured)
	/// Storage: DepDns NsRecords (r:0 w:1)
	/// Proof Skipped: DepDns NsRecords (max_values: None, max_size: None, mode: Measured)
	fn cancel_domain() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `133`
		//  Estimated: `3598`
		// Minimum execution time: 31_329_000 picoseconds.
		Weight::from_parts(31_799_000, 3598)
			.saturating_add(T::DbWeight::get().reads(1_u64))
			.saturating_add(T::DbWeight::get().writes(7_u64))
	}
}

// For backwards compatibility and tests
impl WeightInfo for () {
	/// Storage: DepDns DomainRegistry (r:1 w:1)
	/// Proof Skipped: DepDns DomainRegistry (max_values: None, max_size: None, mode: Measured)
	fn register_domain() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `3`
		//  Estimated: `3468`
		// Minimum execution time: 40_907_000 picoseconds.
		Weight::from_parts(120_586_000, 3468)
			.saturating_add(RocksDbWeight::get().reads(1_u64))
			.saturating_add(RocksDbWeight::get().writes(1_u64))
	}
	/// Storage: DepDns DomainRegistry (r:1 w:1)
	/// Proof Skipped: DepDns DomainRegistry (max_values: None, max_size: None, mode: Measured)
	fn renew_registration() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `99`
		//  Estimated: `3564`
		// Minimum execution time: 39_574_000 picoseconds.
		Weight::from_parts(40_095_000, 3564)
			.saturating_add(RocksDbWeight::get().reads(1_u64))
			.saturating_add(RocksDbWeight::get().writes(1_u64))
	}
	/// Storage: DepDns DomainRegistry (r:1 w:0)
	/// Proof Skipped: DepDns DomainRegistry (max_values: None, max_size: None, mode: Measured)
	/// Storage: DepDns ARecords (r:0 w:1)
	/// Proof Skipped: DepDns ARecords (max_values: None, max_size: None, mode: Measured)
	fn add_update_dns_record() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `99`
		//  Estimated: `3564`
		// Minimum execution time: 20_900_000 picoseconds.
		Weight::from_parts(21_139_000, 3564)
			.saturating_add(RocksDbWeight::get().reads(1_u64))
			.saturating_add(RocksDbWeight::get().writes(1_u64))
	}
	/// Storage: DepDns DomainRegistry (r:1 w:1)
	/// Proof Skipped: DepDns DomainRegistry (max_values: None, max_size: None, mode: Measured)
	/// Storage: DepDns MxRecords (r:0 w:1)
	/// Proof Skipped: DepDns MxRecords (max_values: None, max_size: None, mode: Measured)
	/// Storage: DepDns ARecords (r:0 w:1)
	/// Proof Skipped: DepDns ARecords (max_values: None, max_size: None, mode: Measured)
	/// Storage: DepDns AAAARecords (r:0 w:1)
	/// Proof Skipped: DepDns AAAARecords (max_values: None, max_size: None, mode: Measured)
	/// Storage: DepDns PtrRecords (r:0 w:1)
	/// Proof Skipped: DepDns PtrRecords (max_values: None, max_size: None, mode: Measured)
	/// Storage: DepDns CnameRecords (r:0 w:1)
	/// Proof Skipped: DepDns CnameRecords (max_values: None, max_size: None, mode: Measured)
	/// Storage: DepDns NsRecords (r:0 w:1)
	/// Proof Skipped: DepDns NsRecords (max_values: None, max_size: None, mode: Measured)
	fn cancel_domain() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `133`
		//  Estimated: `3598`
		// Minimum execution time: 31_329_000 picoseconds.
		Weight::from_parts(31_799_000, 3598)
			.saturating_add(RocksDbWeight::get().reads(1_u64))
			.saturating_add(RocksDbWeight::get().writes(7_u64))
	}
}
