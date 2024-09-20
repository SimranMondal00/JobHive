package com.simsam.Spring.Boot.Rest.controller;

import com.simsam.Spring.Boot.Rest.model.JobPost;
import com.simsam.Spring.Boot.Rest.service.JobServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class JobRestController {
    @Autowired
    private JobServices services;

    @GetMapping("jobPosts")
    public List<JobPost> getAllJobs(){
        return services.getAllJobs();
    }
    @GetMapping("jobPost/{postId}")
    public JobPost getJob(@PathVariable("postId") int postId){
        return services.getJob(postId);
    }
    @GetMapping("jobPosts/keyword/{keyword}")
    public List<JobPost> searchByKeyword(@PathVariable("keyword") String keyword){
        return services.search(keyword);
    }
    @PostMapping("jobPost")
    public void addJob(@RequestBody JobPost jobPost){
        services.addJob(jobPost);
    }
    @PutMapping("jobPost")
    public JobPost updateJob(@RequestBody JobPost jobPost){
        services.updateJob(jobPost);
        return services.getJob(jobPost.getPostId());
    }
    @DeleteMapping("jobPost/{postId}")
    public String deleteJob(@PathVariable int postId){
        services.deleteJob(postId);
        return "Delete";
    }
    @GetMapping("load")
    public String loadData(){
        services.load();
        return "success";
    }
}
