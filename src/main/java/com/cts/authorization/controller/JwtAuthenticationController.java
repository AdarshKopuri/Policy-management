package com.cts.authorization.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.cts.authorization.config.JwtTokenUtil;
import com.cts.authorization.exception.AuthorizationException;
import com.cts.authorization.model.JwtRequest;
import com.cts.authorization.model.JwtResponse;
import com.cts.authorization.model.User;
import com.cts.authorization.repository.UserDao;
import com.cts.authorization.service.JwtUserDetailsService;

import io.jsonwebtoken.ExpiredJwtException;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@Slf4j
public class JwtAuthenticationController {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@Autowired
	private JwtUserDetailsService userDetailsService;
	
	@Autowired
	private UserDao userDao;

	/**
	 * This method returns an token to authenticate the microservices.
	 * @param authenticationRequest
	 * @return
	 * @throws AuthorizationException
	 * @throws Exception
	 */
	@PostMapping(value = "/authenticate")
	@ApiOperation(notes="Returns an token to authenticate the microservice",value="authentication for the microservice")
	public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest)
			throws AuthorizationException {
		// @SuppressWarnings("unused")
		// Authentication auth=authenticate(authenticationRequest.getUserName(), authenticationRequest.getPassword());
		
		/*
		if(verifyCred(authenticationRequest.getUserName(), authenticationRequest.getPassword())  ) {
			System.out.println("Matched ");
		//	throw new AuthorizationException("INVALID_CREDENTIALS");
		
		}
		
		*/
		
		if(!verifyCred(authenticationRequest.getUserName(), authenticationRequest.getPassword())  ) {
			System.out.println("not Matched ");
			throw new AuthorizationException("INVALID_CREDENTIALS");
		
		}
		
		
		
		final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUserName());
		//log.debug("UserDetails: {}", userDetails);
		final String token = jwtTokenUtil.generateToken(userDetails);
		return ResponseEntity.ok(new JwtResponse(token));
		
	}
	
	
	@PostMapping(value="/signup")
	public ResponseEntity<?> signup(@RequestBody JwtRequest userDetails) throws AuthorizationException{
		System.out.println(userDetails.getUserName());
		System.out.println(userDetails.getPassword());

		//String password = userDetails.getPassword();
		User user= new User(userDetails.getUserName(),userDetails.getPassword()) ;
		
		
		
		String iscreated = userDetailsService.createUser(user);
		
		System.out.println(iscreated);
		return ResponseEntity.ok(user);

		//return new ResponseEntity<>("auth-Ok", HttpStatus.OK);
		
		}
	
	
	private boolean verifyCred(String userName ,String password) {
		
		System.out.println(userName);
		System.out.println(password);

		User d_user= userDao.findByUserName(userName);
		if(userName!=null && password!=null) {
//			System.out.println(userName);
//			System.out.println(password);
			System.out.println("********************db************");

			System.out.println(d_user.getUserName());
			System.out.println(d_user.getPassword());
			
			if(userName.equals(d_user.getUserName())) {
				System.out.println("userneme matched");
			}
				if( password.equals(d_user.getPassword())){
					System.out.println("password matched");

				return true;
			}
		}
		
		return false;
	}

	private Authentication  authenticate(String userName, String password) throws AuthorizationException {
		try {
			//log.info("Inside authenticate Method==================================");
			
//			
//			System.out.println("UPA token authenticating ......");
//
//			UsernamePasswordAuthenticationToken UPA =new UsernamePasswordAuthenticationToken(userName, password);
//			System.out.println("UPA token authenticated ......");
//
//			System.out.println(UPA.getCredentials());
//			//Authentication auth=authenticationManager.authenticate(UPA);
			
			
			
			
		//	System.out.println(auth);
			Authentication auth=authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(userName, password));
		//	log.info("Authentication Successful.....");
			//log.debug(auth.getCredentials()+"+++++++++++++++++++++++++++++++++");
			return auth;
			
		} catch (DisabledException e) {
			throw new AuthorizationException("USER_DISABLED");
		} catch (BadCredentialsException e) {
			e.printStackTrace();
			throw new AuthorizationException("INVALID_CREDENTIALS");
		}
		
	}

	/**
	 * This method is to authorize the token microservices.
	 * @param requestTokenHeader
	 * @return
	 */
	@PostMapping(value = "/authorize")
	@ApiOperation(notes="Returns the authorization is valid or not",value="authorization is valid or not")
	public boolean authorizeTheRequest(
			@RequestHeader(value = "Authorization", required = true) String requestTokenHeader) {
	//	log.info("Inside authorize =============="+requestTokenHeader);
		
		System.out.println(requestTokenHeader);
		String jwtToken = null;
		String userName = null;
		if (requestTokenHeader != null && requestTokenHeader.startsWith("Bearer ")) {
			jwtToken = requestTokenHeader.substring(7);
			//log.info("JWT Tocken ======================="+jwtToken);
			try {
				userName = jwtTokenUtil.getUsernameFromToken(jwtToken);
			} catch (IllegalArgumentException | ExpiredJwtException e) {
				return false;
			}
		}
		
		System.out.println(userName);
		return userName != null;

	}
	/**
	 * This method is to check whether the microservice works or not.
	 * @return
	 */
	@GetMapping("/health-check")
	@ApiOperation(notes="To check whether the microservice works or not",value="checks the health of the microservice")
	public ResponseEntity<String> healthCheck() {
		return new ResponseEntity<>("auth-Ok", HttpStatus.OK);
	}

}