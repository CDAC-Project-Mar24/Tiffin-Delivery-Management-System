package com.app.dtos;

import java.util.Date;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class ActiveUsers {
	private int userId;
	private String userName;
	@Temporal(TemporalType.TIMESTAMP)
	private Date startDate;
	@Temporal(TemporalType.TIMESTAMP)
	private Date endDate;
	private int totalDays;
	private int totalAmount;
	private int tiffinId;

}
