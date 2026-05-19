"use client";

import { Button } from "@mui/material";
import React, { useMemo } from "react";
import { FiMapPin, FiTruck, FiCalendar, FiCheckCircle } from "react-icons/fi";

const steps = [
  { step: "Pending", date: "2023-12-10", active: true },
  { step: "Processing", date: "2023-12-12", active: true },
  { step: "Shipped", date: "2023-12-15", active: true },
  { step: "Delivered", date: "2023-12-18", active: false },
];

const page = () => {
  const progress = useMemo(
    () => ((steps.filter((s) => s.active).length - 1) / (steps.length - 1)) * 100,
    [],
  );

  return (
    <div className="relative min-h-screen bg-slate-100/80 px-4 py-6 text-slate-900 dark:bg-slate-950 dark:text-slate-100 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 -translate-y-1/4 translate-x-1/4 rounded-full bg-sky-400/20 blur-3xl dark:bg-sky-500/15" />
      <div className="pointer-events-none absolute left-0 top-36 h-80 w-80 -translate-x-1/4 rounded-full bg-emerald-400/10 blur-3xl dark:bg-emerald-400/10" />
      <div className="mx-auto max-w-7xl space-y-8">
        {/*  */}
        <section className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-white/95 p-6 sm:p-8 shadow-[0_35px_120px_-40px_rgba(15,23,42,0.2)] backdrop-blur dark:border-slate-800 dark:bg-slate-900/95 dark:shadow-[0_35px_120px_-40px_rgba(15,23,42,0.55)]">
          <div className="absolute right-8 top-8 h-24 w-24 rounded-full bg-sky-100/80 blur-2xl dark:bg-slate-700/50" />
          <div className="relative flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Shipment tracking</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 dark:text-white">Order Tracking Center</h1>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
                The executive logistics dashboard for precise transit visibility, performance insight, and exceptional delivery control.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                <div className="rounded-[24px] border border-slate-200 bg-slate-50 px-5 py-4 shadow-sm dark:border-slate-700 dark:bg-slate-950">
                  <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400">
                    <FiCalendar className="h-4 w-4" />
                    <span className="text-[11px] uppercase tracking-[0.4em]">Order Date</span>
                  </div>
                  <p className="mt-3 text-lg font-semibold text-slate-950 dark:text-white">Oct 28, 2024</p>
                </div>
                <div className="rounded-[24px] border border-slate-200 bg-slate-50 px-5 py-4 shadow-sm dark:border-slate-700 dark:bg-slate-950">
                  <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-300">
                    <FiMapPin className="h-4 w-4" />
                    <span className="text-[11px] uppercase tracking-[0.4em]">Expected ETA</span>
                  </div>
                  <p className="mt-3 text-lg font-semibold text-slate-950 dark:text-white">May 22, 2026</p>
                </div>
                <div className="rounded-[24px] border border-slate-200 bg-slate-50 px-5 py-4 shadow-sm dark:border-slate-700 dark:bg-slate-950">
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                    <span className="text-[11px] uppercase tracking-[0.4em]">Priority</span>
                  </div>
                  <p className="mt-3 text-lg font-semibold text-slate-950 dark:text-white">High</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-[auto_auto]">
              <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-950">
                <p className="text-[11px] uppercase tracking-[0.42em] text-slate-500 dark:text-slate-400">Order</p>
                <p className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white">#ORD-001</p>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">Premium fulfillment request • expedited support</p>
              </div>
              <div className="rounded-[28px] border border-slate-200 bg-gradient-to-b from-slate-50 to-slate-100 p-6 shadow-sm dark:border-slate-700 dark:from-slate-950 dark:to-slate-900">
                <p className="text-[11px] uppercase tracking-[0.42em] text-slate-500 dark:text-slate-400">Current status</p>
                <span className="mt-4 inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700 dark:bg-sky-900/20 dark:text-sky-200">
                  Shipped
                </span>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">Estimated delivery in 3 days</p>
              </div>
            </div>
          </div>
        </section>
        {/*  */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-[1.8fr_1fr]">
          <main className="space-y-6">
            <section className="rounded-[32px] border border-slate-200 bg-white py-4 px-3 sm:p-6 shadow-xl dark:border-slate-700 dark:bg-slate-950">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">Shipment progress</p>
                  <h2 className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">Route milestone timeline</h2>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                  <FiTruck className="h-4 w-4" /> Live updates enabled
                </div>
              </div>

              <div className="mt-6 rounded-[30px] border border-slate-200 bg-slate-50 py-4 px-3 sm:p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                <div className="mb-6 rounded-full bg-slate-200/70 p-1 dark:bg-slate-700">
                  <div className="h-2 rounded-full bg-gradient-to-r from-sky-500 via-sky-600 to-emerald-500 transition-all" style={{ width: `${progress}%` }} />
                </div>
                <div className="grid gap-3 sm:grid-cols-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                  <div className="rounded-2xl bg-white/80 px-3 py-3 shadow-sm dark:bg-slate-950/70">
                    <p className="uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">Milestones</p>
                    <p className="mt-2 text-lg text-slate-950 dark:text-white">{steps.length}</p>
                  </div>
                  <div className="rounded-2xl bg-white/80 px-3 py-3 shadow-sm dark:bg-slate-950/70">
                    <p className="uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">Completion</p>
                    <p className="mt-2 text-lg text-slate-950 dark:text-white">{Math.round(progress)}%</p>
                  </div>
                </div>

                <div className="relative mt-8 pl-4 sm:pl-6">
                  <div className="absolute left-3 top-4 h-[calc(100%-1rem)] w-px bg-slate-200/80 dark:bg-slate-700" />
                  {steps.map((item, index) => (
                    <div key={item.step} className={`relative mb-8 ${index === steps.length - 1 ? 'mb-0' : ''}`}>
                      <div className={`absolute left-0 ${index === 0 ? 'top-0' : 'top-1'} flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border shadow-sm ${item.active ? 'border-emerald-300 bg-emerald-50 text-emerald-600 shadow-emerald-100/70 dark:border-emerald-400/40 dark:bg-emerald-950/20 dark:text-emerald-300' : 'border-slate-200 bg-white text-slate-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300'}`}>
                        {item.active ? <FiCheckCircle className="h-4 w-4" /> : <span className="h-3 w-3 rounded-full bg-slate-300 dark:bg-slate-600" />}
                      </div>
                      <div className={`rounded-[26px] border p-5 sm:p-6 transition duration-300 ${item.active ? 'border-emerald-200 bg-emerald-50/90 shadow-[0_20px_50px_-30px_rgba(16,185,129,0.3)] dark:border-emerald-400/40 dark:bg-emerald-950/20' : 'border-slate-200 bg-white/95 hover:border-slate-300 hover:shadow-[0_18px_45px_-30px_rgba(15,23,42,0.12)] dark:border-slate-700 dark:bg-slate-900'}`}>
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-base font-semibold text-slate-950 dark:text-white">{item.step}</p>
                            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{item.date}</p>
                          </div>
                          <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${item.active ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-200' : 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300'}`}>
                            {item.active ? 'Completed' : 'Pending'}
                          </span>
                        </div>
                        <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">
                          {item.active
                            ? 'This milestone has cleared quality and compliance checks en route to the destination.'
                            : 'Awaiting the next logistics update from the carrier team.'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </section>

            <section className="rounded-[32px] border border-slate-200 bg-slate-50 p-6 sm:p-8 shadow-lg dark:border-slate-700 dark:bg-slate-900">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">Delivery performance</p>
                  <h2 className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">Carrier excellence</h2>
                </div>
                <span className="inline-flex rounded-full bg-emerald-100 px-3 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-200">4.9/5 rating</span>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[24px] border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-950">
                  <p className="text-[11px] uppercase tracking-[0.34em] text-slate-500 dark:text-slate-400">Transit time</p>
                  <p className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white">3 days</p>
                </div>
                <div className="rounded-[24px] border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-950">
                  <p className="text-[11px] uppercase tracking-[0.34em] text-slate-500 dark:text-slate-400">Shipment integrity</p>
                  <p className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white">100%</p>
                </div>
              </div>
            </section>
          </main>

          <aside className="space-y-6">
            <section className="lg:sticky lg:top-6 rounded-[32px] border border-slate-200 bg-white p-6 sm:p-7 shadow-xl dark:border-slate-700 dark:bg-slate-950">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">Route summary</p>
                  <h2 className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">Logistics overview</h2>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                  <FiMapPin className="h-4 w-4" /> 4 checkpoints
                </div>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-900">
                  <p className="text-sm text-slate-500 dark:text-slate-400">Pickup</p>
                  <p className="mt-3 text-base font-semibold text-slate-950 dark:text-white">Newark Warehouse</p>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">December 10, 2023</p>
                </div>
                <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-900">
                  <p className="text-sm text-slate-500 dark:text-slate-400">Final delivery</p>
                  <p className="mt-3 text-base font-semibold text-slate-950 dark:text-white">Manhattan Distribution</p>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">January 18, 2024</p>
                </div>
              </div>
            </section>

            <section className="rounded-[32px] border border-slate-200 bg-slate-50 p-6 sm:p-7 shadow-lg dark:border-slate-700 dark:bg-slate-900">
              <p className="text-sm uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">Shipment details</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">Logistics snapshot</h2>
              <div className="mt-6 space-y-4">
                <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-950">
                  <p className="text-[11px] uppercase tracking-[0.34em] text-slate-500 dark:text-slate-400">Destination</p>
                  <p className="mt-2 text-base font-semibold text-slate-950 dark:text-white">123 Main Street, Apt 4B, New York, NY 10001</p>
                </div>
                <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-950">
                  <p className="text-[11px] uppercase tracking-[0.34em] text-slate-500 dark:text-slate-400">Carrier</p>
                  <p className="mt-2 text-base font-semibold text-slate-950 dark:text-white">FastTrack Logistics</p>
                </div>
                <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-950">
                  <p className="text-[11px] uppercase tracking-[0.34em] text-slate-500 dark:text-slate-400">Package ID</p>
                  <p className="mt-2 text-base font-semibold text-slate-950 dark:text-white">PX-4228-973</p>
                </div>
              </div>
            </section>

            <section className="rounded-[32px] border border-slate-200 bg-white p-6 sm:p-7 shadow-xl dark:border-slate-700 dark:bg-slate-950">
              <p className="text-sm uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">Actions</p>
              <div className="mt-5 flex flex-col gap-[.5rem]">
                <Button variant="contained" className="w-full rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700">
                  <FiCheckCircle className="mr-2" /> Confirm delivery
                </Button>
                <Button variant="outlined" className="w-full rounded-2xl border-slate-300 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800">
                  Export tracking report
                </Button>
              </div>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default page;
