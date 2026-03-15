---
title: Motor Speed Controller with Integral Action
description: Real-time motor-speed control project using system identification, state-space feedback, and integral action with hardware validation.
category: Controls
group: controls
date_label: 2025–2026
order: 5
image: /img/projects/motor-speed-controller.png
pdf: /pdf/motor-speed-controller.pdf
tools:
  - MATLAB
  - Simulink Connected I/O
  - Arduino
  - System Identification
highlights:
  - Identified a first-order motor model from experimental input-output data using MATLAB System Identification Toolbox.
  - Designed a state-feedback controller with integral action to improve tracking and eliminate steady-state error.
  - Implemented the controller in real time using Arduino, encoder feedback, H-bridge actuation, and Simulink Connected I/O.
  - Evaluated closed-loop behavior experimentally and discussed actuator saturation and anti-windup considerations.
---

## Project Summary

This project combined modeling, controller design, and hardware validation for a closed-loop DC motor speed-control system.

## Scope

- Experimental data collection and model estimation.
- State-space control design with integral action.
- Real-time implementation and encoder-based speed feedback.
- Experimental discussion of practical nonidealities such as saturation.

## Outcome

The project demonstrates strong alignment with modern control implementation and validation workflows.
